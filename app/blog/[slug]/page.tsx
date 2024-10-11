export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="text-4xl font-bold w-screen h-screen flex justify-center items-center">
      Blog Post - {params.slug}
    </div>
  );
}
