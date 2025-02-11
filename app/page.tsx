import Image from "next/image";
import dog from "@/public/image.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image src={dog} alt="dog" />
    </main>
  );
}
