"use client";

import { useActionState } from "react";
import { counter } from "./action";

export function CounterForm() {
  const [count, formAction] = useActionState(counter, 1);

  return (
    <form className="flex flex-col gap-2 text-center" action={formAction}>
      <div className="text-4xl font-bold mb-4">{count}</div>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:bg-zinc-900 h-10 px-4 py-2">
        Increment
      </button>
    </form>
  );
}
