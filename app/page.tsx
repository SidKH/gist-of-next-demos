import Image from "next/image";
import image from "./import-image.png";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <Image
        width={536}
        height={354}
        src="/public-image.png"
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
