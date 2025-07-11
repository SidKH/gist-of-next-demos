export default async function MyRoutePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  return (
    <div className="flex justify-center items-center h-screen text-3xl font-medium">
      My Route {id}
    </div>
  );
}
