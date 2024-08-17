import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {db} from  "@/server/db" 
import { files } from "@/server/db/schema";
import { Pinecone } from '@pinecone-database/pinecone'



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
      const index_name = metadata.userId + "_" +  file.name;
      try{
        await db.insert(files).values(
          {
            userid: metadata.userId,
            file_name: file.name,
            file_url: file.url,
            index_name: index_name
          }
        )
      } catch (error) {
        console.error('Error adding file:', error);

      }




 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type PDFRouter = typeof pdfRouter;