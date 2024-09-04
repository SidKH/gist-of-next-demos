export default async function Page() {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 text-xl font-bold">
      <p>{data.fact}</p>
    </main>
  );
}
