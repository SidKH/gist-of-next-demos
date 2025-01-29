import { db } from "@/db";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { comments, notes } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function NotePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const note = await db.query.notes.findFirst({
    where: eq(notes.slug, slug),
  });

  if (!note) {
    notFound();
  }

  return (
    <article className="prose mx-auto dark:prose-invert">
      <h1 className="mb-2">{note.title}</h1>
      <time className="text-sm text-gray-500">
        {format(note.createdAt, "MMMM d, yyyy")}
      </time>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{note.content}</p>

      <hr className="my-4" />

      <h2>Comments</h2>
      <Comments noteId={note.id} />
    </article>
  );
}

async function Comments({ noteId }: { noteId: number }) {
  const result = await db.query.comments.findMany({
    where: eq(comments.noteId, noteId),
  });

  return (
    <ul className="space-y-4 py-4">
      {result.map((comment) => (
        <li key={comment.id}>
          <p className="font-semibold">{comment.userName}</p>
          <p>{comment.content}</p>
        </li>
      ))}
    </ul>
  );
}
