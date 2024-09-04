"use client";
import { useEffect } from "react";
import useSWR from "swr";

export default function Page() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://catfact.ninja/fact",
    fetcher
  );

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 text-center">
      {isLoading || isValidating ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>{data.fact}</p>
      )}
    </main>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
