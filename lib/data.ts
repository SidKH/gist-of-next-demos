export async function getData() {
  await sleep(2000);
  return "Data from the server";
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
