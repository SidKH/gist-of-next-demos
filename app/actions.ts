"use server";

export async function fetchServerAction() {
  console.log("Fetching data (1s)");
  await sleep(1000);
  return Math.random();
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
