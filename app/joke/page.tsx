"use client";
import useSWR from "swr";

export default function Page() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://official-joke-api.appspot.com/jokes/programming/random",
    fetcher
  );

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 text-center">
      {isLoading || isValidating ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <p>{data[0].setup}</p>
          <p>{data[0].punchline}</p>
        </>
      )}
    </main>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
