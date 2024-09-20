"use client";
import { Badge } from "@/components/ui/badge";
import DeeplyNestedClientComponent from "./client-component-c";
import { Suspense } from "react";

export default function ClientComponent() {
  return (
    <div className="rounded-xl relative  border flex-1 justify-center items-center flex-shrink-0 w-full h-full p-12 pt-0 flex flex-col">
      <Badge variant="outline" className="-mt-3 mb-10 bg-white">
        Client component
      </Badge>
      <Suspense
        fallback={
          <div className="border rounded-xl w-full flex flex-1 justify-center items-center">
            Loading...
          </div>
        }
      >
        <DeeplyNestedClientComponent />
      </Suspense>
    </div>
  );
}
