"use client";

import { useState } from "react";

export function MyComponent() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="flex flex-col justify-center gap-6 items-center">
      <div className="flex flex-col gap-2 text-center items-center">
        <span className="text-3xl font-bold text-zinc-300">{color}</span>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </div>
      <ExpensiveComponent />
    </div>
  );
}

function ExpensiveComponent() {
  // Simulate expensive calculation
  const result = Array(500000)
    .fill(0)
    .reduce((acc, _, i) => {
      return acc + (Math.sin(i) * Math.cos(i)) / Math.sqrt(i + 1);
    }, 0);

  return (
    <div className="text-sm rounded-full px-4 py-1 font-bold border bg-zinc-50">
      ExpensiveComponent
    </div>
  );
}
