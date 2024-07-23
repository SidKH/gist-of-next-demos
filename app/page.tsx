import { headers } from "next/headers";

export default function Home() {
  const ip = headers().get("x-forwarded-for");

  return (
    <main className="flex mt-24 justify-center items-center flex-col gap-4">
      <p>IP Address:</p>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {ip}
      </h1>
    </main>
  );
}
