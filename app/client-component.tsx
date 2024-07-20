"use client";

import { redirect, useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export function ClinetComponent() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        startTransition(() => redirect("/dashboard"));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl font-bold tracking-tight">Client component</h2>
      <p className="text-sm text-stone-700">
        Press {`"R"`} to redirect to dashboard
      </p>
    </div>
  );
}
