import { Card } from "@/components/ui/card";
import { getDataLondon } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Page() {
  const entry = await getDataLondon();
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <div>
        <p className="flex gap-2">
          <span className="w-14 text-right">
            App 👉
          </span>
          <strong>London (eu-west-1)</strong>
        </p>
        <p className="flex gap-2">
          <span className="w-14 text-right">
            DB 👉
          </span>
          <strong>London (eu-west-1)</strong>
        </p>
      </div>
      <Card className="p-8">{entry}</Card>
    </div>
  );
}
