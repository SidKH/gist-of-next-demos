export const dynamic = "force-dynamic";

export default function Home() {
  console.log("server log");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Home Page
      </h1>
    </main>
  );
}
