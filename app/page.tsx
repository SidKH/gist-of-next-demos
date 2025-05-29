import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <Image
        src="/image.png"
        alt="logo"
        width={536}
        height={354}
      />
    </div>
  );
}
