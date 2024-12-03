"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ClientComponent() {
  const router = useRouter();
  return (
    <Button className="absolute bottom-24" onClick={() => router.refresh()}>
      Refresh
    </Button>
  );
}
