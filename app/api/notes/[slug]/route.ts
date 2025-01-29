import { getNote } from "@/data/notes";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const note = await getNote(slug);

  return NextResponse.json(note);
}
