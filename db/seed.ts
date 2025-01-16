import { db } from ".";
import { posts, comments } from "./schema";

async function seed() {
  // Delete existing data
  await db.delete(posts);
  await db.delete(comments);

  // Create a sample post
  const post = await db
    .insert(posts)
    .values({
      title: "Getting Started with Web Development",
      slug: "getting-started",
      content:
        "Web development is an exciting journey. Here are some tips to get started...",
    })
    .returning();

  // Create some sample comments for the post
  await db.insert(comments).values([
    {
      userName: "John Doe",
      content: "Great post! Very helpful for beginners.",
      postId: post[0].id,
    },
    {
      userName: "Jane Doe",
      content: "Could you elaborate more on the frontend frameworks?",
      postId: post[0].id,
    },
  ]);

  console.log("Seed data inserted successfully!");
}

seed().catch((e) => {
  console.error("Error seeding data:", e);
  process.exit(1);
});
