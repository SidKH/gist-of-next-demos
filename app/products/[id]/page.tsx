// app/products/[id]/page.tsx

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  const { id } = await params;
  return (
    <div className="w-screen h-screen flex justify-center items-center text-3xl font-bold">
      Product: {id}
    </div>
  );
}
