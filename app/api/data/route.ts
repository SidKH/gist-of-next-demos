import { sleep } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Fetching data (1s)");
  await sleep(1000);
  return NextResponse.json(Math.random());
}
