import { prisma } from "@/lib/db";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Post id={1} />
      <Suspense fallback="Loading...">
        <PostViews id={1} />
      </Suspense>
    </main>
  );
}

async function PostViews({ id }: { id: number }) {
  const totalViews = await prisma.postView.count({ where: { postId: id } });
  return <div>Viewed {totalViews} times</div>;
}

async function Post({ id }: { id: number }) {
  "use cache";
  const post = await prisma.post.findUnique({ where: { id } });
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
