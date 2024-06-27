import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Dashboard
      </h1>
    </main>
  );
}
