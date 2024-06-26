import { Show } from "@/types";
import { Metadata } from "next";
import Link from "next/link";

// Static metadata
export const metadata: Metadata = {
  title: "TV Shows",
  description: "List of tv shows",
};

export default async function Home() {
  const shows: Show[] = await fetch(
    "https://api.tvmaze.com/shows?q=batman"
  ).then((res) => res.json());

  const showList = shows.slice(0, 16);

  return (
    <main className="max-w-2xl py-8 px-4 mx-auto">
      <ul className="grid grid-cols-4 gap-3">
        {showList.map((show) => (
          <li key={show.id}>
            <Link href={`/${show.id}`}>
              <img
                className="rounded-lg"
                src={show.image?.medium}
                alt={show.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
