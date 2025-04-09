import { getViews } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return new Response("No id provided", {
      status: 400,
    });
  }
  const views = await getViews(id);
  return new Response(views.toString());
}
