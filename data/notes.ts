import "server-only";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { comments, notes } from "@/db/schema";
import { getSession } from "./user";

export async function getNote(slug: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const note = await db.query.notes.findFirst({
    where: eq(notes.slug, slug),
  });

  return note;
}

export async function getComments(noteId: number) {
  return db.query.comments.findMany({
    where: eq(comments.noteId, noteId),
  });
}
