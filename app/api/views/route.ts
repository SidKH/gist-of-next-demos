import { getViews } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(id, 123);
  if (!id) {
    return new Response("No id provided", {
      status: 400,
    });
  }
  const views = await getViews(id);
  console.log(views, 234);
  return new Response(views.toString());
}
