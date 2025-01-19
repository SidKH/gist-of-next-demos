export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  throw new Error("Test error");

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
