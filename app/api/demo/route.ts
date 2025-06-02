export const dynamic = "force-dynamic";

export async function GET() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  return new Response("Hello, world!");
}
