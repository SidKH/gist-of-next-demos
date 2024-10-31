import { Parent } from "./parent";
import { Child } from "./child";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Suspense>
        <Parent>
          <Child />
        </Parent>
      </Suspense>
    </main>
  );
}
