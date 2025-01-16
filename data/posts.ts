import { db } from "@/db";
import { comments, posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import "server-only";

export async function getPost(slug: string) {
  return db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });
}

export async function getComments(postId: number) {
  return db.query.comments.findMany({
    where: eq(comments.postId, postId),
  });
}
