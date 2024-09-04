export default async function Page() {
  const res = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const data = await res.json();
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 text-xl font-bold">
      <p>{data[0].setup}</p>
      <p>{data[0].punchline}</p>
    </main>
  );
}
