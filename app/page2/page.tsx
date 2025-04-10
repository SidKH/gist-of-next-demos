export default async function Page2() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-bold">Page 2</h1>
      <p className="text-muted-foreground">
        Simulating latency (1 second)
      </p>
    </div>
  );
}
