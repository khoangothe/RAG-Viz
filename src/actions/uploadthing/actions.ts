"use server"

import { UTApi } from "uploadthing/server";
import { db } from "@/server/db";
import { files } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from 'next/navigation';  // Server-side redirection

const utapi = new UTApi();


async function deleteRagFile(fileName: string) {
  await db.delete(files).where(
    eq(files.id, fileName)
  )
  await utapi.deleteFiles(fileName);
  console.log(fileName);
}

export const handleDelete = async (fileName: string) => {
  await deleteRagFile(fileName);
  redirect('/');  // Redirect to home page after server-side processing
}

