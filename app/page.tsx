export const dynamic = "force-dynamic";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
  );
}
