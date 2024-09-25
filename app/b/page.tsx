"use client";

import { useEffect } from "react";

export default function PageB() {
  useEffect(() => {
    console.log("Log from Page B");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Page B
      </h1>
    </main>
  );
}
