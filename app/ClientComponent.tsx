"use client";

import { Suspense, use } from "react";

export function ClientComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts />
    </Suspense>
  );
}

function Posts() {
  const posts = use(
    fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    }).then((res) => res.json())
  );

  return (
    <div className="max-w-lg mx-auto p-8 flex flex-col gap-4">
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
