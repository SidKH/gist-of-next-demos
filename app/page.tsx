import { Skeleton } from "@/components/ui/skeleton";
import { getPrimaryData, getSecondaryData, getUser } from "@/lib/data";
import { Suspense } from "react";

export default async function Home() {
  const user = await getUser();
  const primaryData = getPrimaryData(user.id);
  const secondaryData = getSecondaryData(user.id);

  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold leading-tight">{user.name}</h1>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </header>
      <Box>
        <PrimaryData promise={primaryData} />
      </Box>
      <Box>
        <SecondaryData promise={secondaryData} />
      </Box>
    </main>
  );
}

async function PrimaryData({ promise }: { promise: Promise<string> }) {
  const data = await promise;
  return <p>{data}</p>;
}

async function SecondaryData({ promise }: { promise: Promise<string> }) {
  const data = await promise;
  return <p>{data}</p>;
}

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-md border w-64 flex justify-center items-center h-48">
      {children}
    </div>
  );
}
