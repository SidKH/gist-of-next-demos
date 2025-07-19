import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <Image
        src="https://res.cloudinary.com/dulgvdcw5/image/upload/v1704828064/Fewa/cld-sample-2.jpg"
        alt="Image"
        className="w-80"
        width={1000}
        height={1000}
      />
    </div>
  );
}
