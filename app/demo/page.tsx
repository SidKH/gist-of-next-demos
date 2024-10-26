import { RandomNumber } from "@/components/random-number";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="bg-white w-80 h-60 border rounded-lg flex flex-col">
      <p className="font-mono text-sm p-2 border-b text-center">
        app/demo/page.tsx
      </p>
      <div className="flex-1 flex justify-center items-center">
        <Suspense
          fallback={
            <div className="h-[48px] flex justify-center items-center">
              Loading...
            </div>
          }
        >
          <RandomNumber />
        </Suspense>
      </div>
    </main>
  );
}
