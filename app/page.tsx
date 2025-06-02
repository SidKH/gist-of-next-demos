"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center flex-col">
      Simulate slow request
      <Button
        onClick={() => {
          fetch("/api/demo");
        }}
      >
        Let&apos;s Go!
      </Button>
    </div>
  );
}
