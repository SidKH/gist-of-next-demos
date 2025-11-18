"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export function NextMovieButton() {
  const { id } = useParams();
  return (
    <Button asChild>
      <Link href={`/movie/${Number(id) + 1}`}>Next Movie</Link>
    </Button>
  );
}
