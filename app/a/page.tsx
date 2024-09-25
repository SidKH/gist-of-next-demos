"use client";

import { useCallback, useEffect } from "react";

export default function PageA() {
  useEffect(() => {
    console.log("Log from Page A");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Page A
      </h1>
    </main>
  );
}
