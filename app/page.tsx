export const dynamic = "force-dynamic";

import { getData } from "@/lib/data";
import { RequestTimer } from "./RequestTimer";

export default async function Home() {
  const dataPromise = getData();

  return (
    <main className="flex min-h-screen justify-center items-center">
      <RequestTimer dataPromise={dataPromise} />
    </main>
  );
}
