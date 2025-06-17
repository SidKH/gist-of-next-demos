import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tab: string }>;
}) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col gap-4 items-center h-screen justify-center w-screen bg-stone-50">
      <Suspense
        key={tab}
        fallback={
          <div className="w-64 h-64 bg-white border rounded-md flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        }
      >
        <Tab i={tab} />
      </Suspense>
      <div className="flex gap-4">
        <Link
          className="text-sm hover:underline"
          href="/?tab=1"
        >
          Tab 1
        </Link>
        <Link
          className="text-sm hover:underline"
          href="/?tab=2"
        >
          Tab 2
        </Link>
      </div>
    </div>
  );
}

async function Tab({ i }: { i: string }) {
  await sleep(1000);
  return (
    <div className="w-64 h-64 border bg-white rounded-md flex items-center justify-center">
      Tab {i}
    </div>
  );
}

async function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}
