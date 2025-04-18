import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

export default async function Home() {
  const entry = (await redis.get("entry")) as string;

  return (
    <div className="flex flex-col items-center h-screen justify-center text-4xl font-bold">
      {entry}
    </div>
  );
}
