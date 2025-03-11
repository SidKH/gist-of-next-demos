"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function TypeLink({ type }: { type: string }) {
  const searchParams = useSearchParams();
  const selectedType = searchParams.get("type");
  return (
    <Link
      href={`/pokedex?type=${type}`}
      className={`${
        selectedType === type ? "bg-stone-950 text-white" : ""
      } px-6 py-1 capitalize transition-colors`}
    >
      {type}
    </Link>
  );
}
