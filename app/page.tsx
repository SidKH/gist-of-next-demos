"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center flex-col">
      Simulate 50 concurrent requests 👤👤👤
      <Button
        onClick={() => {
          for (let i = 0; i < 50; i++) {
            fetch("/api/demo");
          }
        }}
      >
        Let&apos;s Go!
      </Button>
    </div>
  );
}
