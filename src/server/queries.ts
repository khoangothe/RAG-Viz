import "server-only";
import { auth } from "@clerk/nextjs/server";


import { db } from "./db";

export async function getDocuments(){
    
    let files : FileType[];
    const user = auth();

    if (!user.userId) {
        files = []
    }else{
        files = await db.query.files.findMany();

    }            
    return files
}

export async function getDocument( id : string){
    
    const file = await db.query.files.findFirst(
        {
            where: (file, {eq}) => eq(file.id, id)
        }
    )
    return file
}

export type FileType = Awaited<ReturnType<typeof getDocument>>;
