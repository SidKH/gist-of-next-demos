import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  userName: text("user_name").notNull(),
  noteId: serial("note_id")
    .references(() => notes.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
