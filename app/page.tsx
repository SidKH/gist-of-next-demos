export const dynamic = "force-dynamic";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <RandomDog />
      </Suspense>
    </main>
  );
}

async function RandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <img className="max-w-sm" src={data.message} alt="Random dog" />;
}
