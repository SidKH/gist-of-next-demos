import Image from "next/image";
import img2 from "./image-2.jpg";

export default function Page2() {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-4xl font-bold">
      <Image
        className="w-[300px] h-[300px] object-cover"
        src={img2}
        alt="image-2"
      />
    </div>
  );
}
