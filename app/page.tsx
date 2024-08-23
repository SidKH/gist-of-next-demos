import { Loader2 } from "lucide-react";
import { Suspense } from "react";

async function MyComponent() {
  await sleep(2000);
  return <h1>My Component</h1>;
}

export default function Home() {
  return (
    <main className="p-24 flex min-h-[40vh] text-center justify-center items-center">
      <Suspense
        fallback={<Loader2 className="h-8 w-8 animate-spin" />}
      >
        <MyComponent />
      </Suspense>
    </main>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
