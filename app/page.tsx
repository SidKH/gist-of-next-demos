"use client";

import { useState } from "react";
import { fetchServerAction } from "./actions";

export default function Home() {
  const [data, setData] = useState<number[] | null>(null);

  function fetchRouteHandler() {
    return fetch("/api/data").then((res) => res.json());
  }

  if (data === null) {
    return (
      <div className="h-screen flex justify-center items-center">
        <button
          className="bg-stone-950 text-white text-sm px-4 py-2 rounded-md"
          onClick={async () => {
            const data = await Promise.all([
              fetchServerAction(),
              fetchServerAction(),
              fetchServerAction(),
            ]);
            setData(data);
          }}
        >
          Fetch Data
        </button>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-4 min-h-screen justify-center items-center">
      {data.map((d) => (
        <p key={d}>{d}</p>
      ))}
    </main>
  );
}
