"use server";

import { sleep } from "@/lib/utils";

export async function fetchServerAction() {
  console.log("Fetching data (1s)");
  await sleep(1000);
  return Math.random();
}
