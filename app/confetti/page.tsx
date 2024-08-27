"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const message = searchParams.message;

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {message}
      </h1>
    </div>
  );
}
