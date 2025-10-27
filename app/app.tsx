"use client";
// #region imports
import { useState } from "react";
import { Button } from "@/components/ui/button";
// #endregion

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="border flex border-dashed p-8 items-center gap-8 bg-white/2">
      <Button onClick={() => setCount(count + 1)}>
        Count: {count}
      </Button>
      <div className="grid grid-cols-2 gap-4">
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <p className="p-4 border border-dashed">C1</p>
  );
}

function Component2() {
  return (
    <p className="p-4 border border-dashed">C2</p>
  );
}

function Component3() {
  return (
    <p className="p-4 border border-dashed">C3</p>
  );
}

function Component4() {
  return (
    <p className="p-4 border border-dashed">C4</p>
  );
}
