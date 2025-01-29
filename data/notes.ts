import { db } from "@/db";
import { eq } from "drizzle-orm";
import { comments, notes } from "@/db/schema";

export async function getNote(slug: string) {
  const data = await db.query.notes.findFirst({
    where: eq(notes.slug, slug),
  });

  return data;
}

export async function getComments(noteId: number) {
  const data = await db.query.comments.findMany({
    where: eq(comments.noteId, noteId),
  });

  return data;
}
