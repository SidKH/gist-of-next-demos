import { db } from "@/db";
import { notes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const note = await db.query.notes.findFirst({
    where: eq(notes.slug, slug),
  });

  return NextResponse.json(note);
}
