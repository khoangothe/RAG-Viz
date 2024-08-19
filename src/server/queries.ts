import "server-only";


import { db } from "./db";


export async function getDocument( id : string){
    const file = await db.query.files.findFirst(
        {
            where: (file, {eq}) => eq(file.id, id)
        }
    )
    return file
}

export type FileType = Awaited<ReturnType<typeof getDocument>>;
