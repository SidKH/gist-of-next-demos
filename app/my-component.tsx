"use client";

import { getTheAnswer } from "@/lib/data";

export function MyComponent() {
  return <h2>{getTheAnswer()}</h2>;
}
