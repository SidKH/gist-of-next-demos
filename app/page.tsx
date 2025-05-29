import Image from "next/image";
import img from "@/public/image-2.png";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <Image src={img} alt="logo" />
    </div>
  );
}
