import { headers } from "next/headers";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-4">
      <p>IP Address:</p>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl blur-md">
        {headers().get("x-forwarded-for")}
      </h1>
    </main>
  );
}
