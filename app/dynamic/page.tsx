import { Badge } from "@/components/ui/badge";
import { fetchData } from "@/lib/data";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Dynamic page</h1>
      <Suspense fallback={<Badge variant="secondary">Loading...</Badge>}>
        <DynamicComponent />
      </Suspense>
    </div>
  )
}

async function DynamicComponent() {
  const data = await fetchData();
  return <Badge>{data}</Badge>
}