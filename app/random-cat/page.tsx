import { Suspense } from "react";

export default async function RandomCatPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans bg-black">
      <h1 className="text-2xl font-bold mb-6">Random Cat</h1>
      <main className="border p-4 w-64 h-64 flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <RandomCat />
        </Suspense>
      </main>
    </div>
  );
}

async function RandomCat() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search", {
    cache: "no-store",
  });
  const data = await response.json();
  const catImage = data[0].url;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <img
      src={catImage}
      alt="Random cat"
      className="w-full h-full object-cover"
    />
  );
}
