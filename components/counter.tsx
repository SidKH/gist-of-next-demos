"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex bg-white/5 border-white/50 border border-dashed my-8 rounded-md p-8 flex-col gap-2 items-center justify-center size-60">
      <p className="text-white/50">Client sate</p>
      <p className="text-5xl font-bold mb-4">{count}</p>
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  );
}
