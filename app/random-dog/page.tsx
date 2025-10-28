import { Suspense } from "react";

export default async function RandomDogPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans bg-black">
      <h1 className="text-2xl font-bold mb-6">Random Dog</h1>
      <main className="border p-4 w-64 h-64 flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <RandomDog />
        </Suspense>
      </main>
    </div>
  );
}

async function RandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  const data = await response.json();
  const dogImage = data.message;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <img
      src={dogImage}
      alt="Random dog"
      className="w-full h-full object-cover"
    />
  );
}
