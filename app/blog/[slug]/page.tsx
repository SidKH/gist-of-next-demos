import { Badge } from "@/components/ui/badge";
import { getPost, getViews } from "@/lib/data";
import { ViewsBadge } from "./views-badge";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>
      <ViewsBadge id={post.id} />
      <div className="my-4">{post.content}</div>
    </div>
  );
}
