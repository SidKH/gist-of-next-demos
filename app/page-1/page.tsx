import Image from "next/image";
import img1 from "./image-1.jpg";

export default function Page1() {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-4xl font-bold">
      <Image
        className="w-[300px] h-[300px] object-cover"
        src={img1}
        alt="image-1"
      />
    </div>
  );
}
