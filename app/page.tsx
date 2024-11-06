import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="max-w-xl mx-auto p-8 flex flex-col gap-4">
      <Suspense>
        <Post id={1} />
      </Suspense>
      <Suspense>
        <PostViews id={1} />
      </Suspense>
    </main>
  );
}

async function PostViews({ id }: { id: number }) {
  const totalViews = await prisma.postView.count({ where: { postId: id } });
  return (
    <div className="text-sm text-muted-foreground animate-in fade-in-0 duration-300">
      Viewed {totalViews} times
    </div>
  );
}

async function Post({ id }: { id: number }) {
  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
        {post.title}
      </h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
