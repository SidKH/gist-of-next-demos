import "server-only";

import { db } from "@/db";
import { comments, posts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getPost(slug: string) {
  const post = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  return post;
}

export async function getComments(postId: number) {
  return db.query.comments.findMany({
    where: eq(comments.postId, postId),
  });
}
