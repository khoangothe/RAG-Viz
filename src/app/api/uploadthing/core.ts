import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {db} from  "@/server/db" 
import { files } from "@/server/db/schema";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";

import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import { MemoryVectorStore } from "langchain/vectorstores/memory";

import { Pinecone } from '@pinecone-database/pinecone';

import { PineconeStore } from "@langchain/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";


import fs from "fs/promises";



const f = createUploadthing();
  
// FileRouter for your app, can contain multiple FileRoutes
export const pdfRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: "1" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      // const index_name = metadata.userId.toLowerCase() + "-" +  file.name.toLocaleLowerCase();
      const index_name = "test"
      await db.insert(files).values({
            userid: metadata.userId,
            file_name: file.name,
            file_url: file.url,
            index_name: index_name
        }
      )
      
      try{
        //Make this global
        const pc = new Pinecone();
        await pc.createIndex({
          name: index_name,
          dimension: 1536,
          metric: 'cosine',
          spec: {
            serverless: {
              cloud: 'aws',
              region: 'us-east-1'
            }
          }
        });

        const response = await fetch(file.url);
        const data = await response.blob();
        const loader = new WebPDFLoader(data, {});
        const docs = await loader.load();
        //Should make this global like db
        const splitter = new RecursiveCharacterTextSplitter({
          chunkSize:1024,
          chunkOverlap:0,
          lengthFunction:(text) => {return text.length},
        });
        //Should make this global
        const embeddings = new OpenAIEmbeddings({
            batchSize: 512, // Default value if omitted is 512. Max is 2048
            model: "text-embedding-ada-002"
          }
        )
        const text = "PERSONAL PROJECTS";
        
        const finalDocs = await splitter.splitDocuments(docs)
        const pinecone = new PineconeClient();
        const pineconeIndex = pinecone.Index(index_name);


        await PineconeStore.fromDocuments(
          finalDocs,
          embeddings,
          {pineconeIndex : pineconeIndex}
        );
      }catch(error){
        console.log(error);
      }
      
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type PDFRouter = typeof pdfRouter;