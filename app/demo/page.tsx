"use cache";
import { RandomNumber } from "@/components/random-number";

export default async function Home() {
  return (
    <main className="bg-white w-80 h-52 border rounded-lg flex flex-col">
      <p className="font-mono text-sm p-2 border-b text-center">
        app/demo/page.tsx
      </p>
      <div className="flex-1 flex justify-center items-center">
        <RandomNumber />
      </div>
    </main>
  );
}
