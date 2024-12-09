import { showConfetti } from "./page.client";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Server component
      </h2>
      <button
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        onClick={showConfetti}
      >
        Button
      </button>
    </main>
  );
}
