import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const randomDog = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => data.message);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="absolute top-5 w-full text-center">Random dog image</h1>
      <div className="w-48 h-48 relative">
        <Image
          src={randomDog}
          className="max-w-xs max-h-[240px] object-contain"
          fill={true}
          alt="Dog"
        />
      </div>
    </main>
  );
}
