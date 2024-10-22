export default async function Home() {
  const { message: dogImage } = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  ).then((res) => res.json());

  return (
    <main className="flex min-h-screen justify-center items-center">
      <img src={dogImage} alt="dog" />
    </main>
  );
}
