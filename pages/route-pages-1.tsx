import { Nav } from "@/components/nav";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-3">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Pages Router Page 1
      </h1>
      <Nav />
    </main>
  );
}
