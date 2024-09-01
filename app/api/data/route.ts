export async function GET() {
  await sleep(1000);
  return Response.json(Math.random());
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
