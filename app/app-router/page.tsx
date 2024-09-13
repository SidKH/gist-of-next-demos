import { Skeleton } from "@/components/ui/skeleton";
import { getPrimaryContent, getSecondaryContent, getUser } from "@/lib/data";
import { Suspense } from "react";

export default async function Page() {
  const user = await getUser();

  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold leading-tight">{user.name}</h1>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </header>
      <Box>
        <Suspense fallback={<Skeleton className="h-6 w-24" />}>
          <PrimaryContent userId={user.id} />
        </Suspense>
      </Box>
      <Box>
        <Suspense fallback={<Skeleton className="h-6 w-24" />}>
          <SecondaryContent userId={user.id} />
        </Suspense>
      </Box>
    </main>
  );
}

async function PrimaryContent({ userId }: { userId: string }) {
  const content = await getPrimaryContent(userId);
  return <p>{content}</p>;
}

async function SecondaryContent({ userId }: { userId: string }) {
  const content = await getSecondaryContent(userId);
  return <p>{content}</p>;
}

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-md border w-64 flex justify-center items-center h-20">
      {children}
    </div>
  );
}
