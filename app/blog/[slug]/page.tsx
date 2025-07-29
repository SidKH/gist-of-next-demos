export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Blog Post - {slug}
    </div>
  );
}
