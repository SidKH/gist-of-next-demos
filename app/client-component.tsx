"use client";

import { redirect, useRouter } from "next/navigation";

export function ClinetComponent() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl font-bold tracking-tight">Client component</h2>
      <button
        onMouseOver={() => {
          redirect("/dashboard");
        }}
        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Redirect to Dashboard
      </button>
    </div>
  );
}
