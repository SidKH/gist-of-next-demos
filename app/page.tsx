import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <Image
        src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        alt="logo"
        width={536}
        height={354}
      />
    </div>
  );
}
