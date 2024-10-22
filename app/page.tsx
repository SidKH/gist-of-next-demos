export default async function Home() {
  const { message: dogImage } = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  ).then((res) => res.json());

  return (
    <main className="flex min-h-screen justify-center flex-col gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Next 14
      </h1>
      <img className="max-w-xs" src={dogImage} alt="dog" />
    </main>
  );
}
