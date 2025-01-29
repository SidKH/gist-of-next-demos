import { db } from "@/db";
import { format } from "date-fns";
import { comments, notes } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const note = await db.query.notes.findFirst({
    where: eq(notes.slug, slug),
  });

  //#region Rest of the code
  if (!note) {
    notFound();
  }

  return (
    <article className="prose mx-auto dark:prose-invert">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
        {note.title}
      </h1>
      <time className="text-sm text-gray-500">
        {format(note.createdAt, "MMMM d, yyyy")}
      </time>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{note.content}</p>

      <hr className="my-4" />

      <h2>Comments</h2>
      <Comments noteId={note.id} />
    </article>
  );
  //#endregion
}

async function Comments({ noteId }: { noteId: number }) {
  const result = await db.query.comments.findMany({
    where: eq(comments.noteId, noteId),
  });

  //#region Rest of the code
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
  //#endregion
}
