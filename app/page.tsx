import Image from "next/image";
import image from "./dog.png";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <Image
        width={536}
        height={354}
        src="/dog.png"
        alt="dog"
      />
      <Image
        width={536}
        height={354}
        src={image}
        alt="dog"
      />
    </div>
  );
}
