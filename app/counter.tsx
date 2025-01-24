"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <title>{`Counter: ${count}`}</title>
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
    </div>
  );
}
