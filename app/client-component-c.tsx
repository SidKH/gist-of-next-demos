"use client";

import { Badge } from "@/components/ui/badge";
import { useUser } from "@/lib/auth/user-provider";

export default function DeeplyNestedClientComponent() {
  const user = useUser();

  return (
    <div className="rounded-xl relative  border flex-1 justify-start items-center flex-shrink-0 w-full h-full p-12 pt-0 flex flex-col">
      <Badge variant="outline" className="-mt-3 mb-10 bg-white">
        Deeply nested client component
      </Badge>
      <h2 className="text-2xl font-bold">{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}
