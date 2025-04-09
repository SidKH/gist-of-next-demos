"use client";

import { Badge } from "@/components/ui/badge";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

export function ViewsBadge({ id }: { id: string }) {
  const { data } = useSWR(
    `/api/views?id=${id}`,
    fetcher
  );
  return (
    <Badge
      className="w-24 text-center"
      variant="outline"
    >
      {data ? `${data} views` : "..."}
    </Badge>
  );
}
