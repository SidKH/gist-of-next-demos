export const dynamic = "force-dynamic";

export default async function Page() {
  await sleep(300);

  if (Math.random() > 0.5) {
    throw new Error("Error thrown in component");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
