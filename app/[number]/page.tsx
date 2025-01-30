export const dynamic = "force-static";

import { revalidatePath } from "next/cache";

export default async function Page({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  // Simulate latency
  await sleep(1000);
  const number = (await params).number;

  async function revalidate() {
    "use server";
    revalidatePath(`/${number}`);
  }

  return (
    <div className="text-4xl font-bold tracking-tight w-screen h-screen flex items-center justify-center">
      Page {number}
      <form action={revalidate}>
        <button>Revalidate</button>
      </form>
    </div>
  );
}

export function generateStaticParams() {
  return [{ number: "100" }, { number: "101" }, { number: "102" }];
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
