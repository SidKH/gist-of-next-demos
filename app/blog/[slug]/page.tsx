import { db } from "@/db";
import { comments, posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { format } from "date-fns";
import { getComments, getPost } from "@/data/posts";
import { auth } from "@/auth";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className="border-b pb-6 mb-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          {format(post.createdAt, "MMMM d, yyyy")}
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{post.content}</p>
      </div>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Comments
        </h3>
        <Comments postId={post.id} />
      </div>
    </div>
  );
}

async function Comments({ postId }: { postId: number }) {
  const result = await getComments(postId);

  return (
    <div>
      <ul className="space-y-4 py-4">
        {result.map((comment) => (
          <li key={comment.id}>
            <p className="font-semibold">{comment.userName}</p>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
