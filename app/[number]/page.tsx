export const dynamic = "force-static";

export default async function Page({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  // Simulate latency
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const number = (await params).number;

  return (
    <div className="text-4xl font-bold tracking-tight w-screen h-screen flex items-center justify-center">
      Page {number}
    </div>
  );
}
