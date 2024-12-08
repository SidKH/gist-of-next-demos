import { ConfettiButton } from "@/components/ConfettiButton";

export default async function Home() {
  const { message: dogImage } = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  ).then((res) => res.json());

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ConfettiButton>
        <img className="max-w-[240px] max-h-[240px]" src={dogImage} alt="dog" />
      </ConfettiButton>
    </main>
  );
}
