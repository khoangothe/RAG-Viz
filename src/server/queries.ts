import "server-only";
import { auth } from "@clerk/nextjs/server";

import { db } from "./db";

export async function getDocuments() {
  let files: FileType[];
  const user = auth();

  if (!user.userId) {
    files = [];
  } else {
    files = await db.query.files.findMany({
      where: (file, { eq }) => eq(file.userid, user.userId),
    });
  }
  return files;
}

export async function getDocument(id: string) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const file = await db.query.files.findFirst({
    where: (file, { eq, and }) =>
      and(eq(file.id, id), eq(file.userid, user.userId)),
  });

  return file;
}

export type FileType = Awaited<ReturnType<typeof getDocument>>;
