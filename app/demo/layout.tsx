import { LoadingFallback, RandomNumber } from "@/components/random-number";
import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-[400px] h-[400px] bg-stone-50 border rounded-lg flex flex-col justify-center items-center gap-6 pb-6">
        <p className="font-mono text-sm p-2 border-b text-center w-full">
          app/demo/layout.tsx
        </p>
        <Suspense fallback={<LoadingFallback />}>
          <RandomNumber />
        </Suspense>
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
