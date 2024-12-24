import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { revalidatePath } from "next/cache";

export type Item = {
  id: string;
  content: string;
};

// Database initialization and connection
let db: Database | null = null;

async function getDb() {
  if (!db) {
    db = await open({
      filename: "./data/items.db",
      driver: sqlite3.Database,
    });

    // Create table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS items (
        id TEXT PRIMARY KEY,
        content TEXT NOT NULL
      )
    `);
  }
  return db;
}

// Initialize with 100 random items if table is empty
async function initializeData() {
  try {
    const db = await getDb();
    const count = await db.get("SELECT COUNT(*) as count FROM items");

    if (count.count === 0) {
      const stmt = await db.prepare(
        "INSERT INTO items (id, content) VALUES (?, ?)"
      );

      for (let i = 0; i < 100; i++) {
        await stmt.run(
          (i + 1).toString(),
          `Random Item ${Math.random().toString(36).substring(7)}`
        );
      }

      await stmt.finalize();
    }

    return getItemsFromDb();
  } catch (error) {
    console.error("Error initializing data:", error);
    return [];
  }
}

export async function getItemsFromDb(): Promise<Item[]> {
  console.log("Get All Items from DB");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const db = await getDb();
    const items = await db.all("SELECT * FROM items");
    return items;
  } catch (error) {
    return initializeData();
  }
}

export async function updateItemInDb(
  id: string,
  content: string
): Promise<Item> {
  console.log("Update Item in DB");
  try {
    const db = await getDb();
    await db.run("UPDATE items SET content = ? WHERE id = ?", [content, id]);
    const updatedItem = await db.get("SELECT * FROM items WHERE id = ?", id);
    return updatedItem;
  } catch (error) {
    console.error("Error updating item:", error);
    throw new Error("Failed to update item");
  }
}
