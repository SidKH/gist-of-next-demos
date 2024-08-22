import { Suspense } from "react";

async function MyComponent() {
  await sleep(2000);
  return <h1>My Component</h1>;
}

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Suspense fallback="Loading...">
        <MyComponent />
      </Suspense>
    </main>
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
