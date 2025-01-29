import { db } from ".";
import { notes, comments } from "./schema";

async function seed() {
  // Clear existing data
  await db.delete(comments);
  await db.delete(notes);

  // Create a sample note
  const note = await db
    .insert(notes)
    .values({
      title: "Getting Started with Web Development",
      slug: "getting-started-with-web-development",
      content:
        "Web development is an exciting journey. Here are some tips to get started with web development. This is a test note to see if the comments are working. ",
    })
    .returning();

  // Create some sample comments for the note
  await db.insert(comments).values([
    {
      userName: "John Doe",
      content: "Great note! Very helpful for beginners.",
      noteId: note[0].id,
    },
    {
      userName: "Jane Smith",
      content: "Thanks for sharing these tips!",
      noteId: note[0].id,
    },
  ]);

  console.log("Seed completed successfully!");
}

seed().catch(console.error);
