import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[50vh] justify-center items-center bg-stone-100">
      <div
        className="bg-white border shadow-md"
        style={{
          position: "relative",
          width: 400,
          height: 400,
          overflow: "auto",
          resize: "both",
        }}
      >
        <Image
          src="/sam.jpg"
          alt="..."
          width={1290}
          height={1411}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </main>
  );
}
