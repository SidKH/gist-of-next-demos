import ClientComponentA from "./client-component-a";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center relative p-12 pt-0 bg-stone-50">
      <p className="mt-4 mb-8 text-sm">Server component</p>
      <ClientComponentA />
    </main>
  );
}
