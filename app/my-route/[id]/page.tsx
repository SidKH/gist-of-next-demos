export default async function MyRoutePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex justify-center items-center h-screen text-3xl font-medium">
      My Route {id}
    </div>
  );
}

export async function generateStaticParams() {
  return [...Array(100)].map((_, index) => ({
    id: (index + 1).toString(),
  }));
}
