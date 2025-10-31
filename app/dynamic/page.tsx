import { fetchData } from "@/lib/data";
import { Suspense } from "react";

export default async function Page() {


  return (
    <div className="flex flex-col items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  )
}

async function DynamicComponent() {
  const data = await fetchData();
  return (
      <h1>{data}</h1>
  )
}