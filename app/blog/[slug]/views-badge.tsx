"use client";

import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
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
      className="w-24 text-center h-[22px] flex items-center justify-center"
      variant="outline"
    >
      {data ? (
        <span>{data} views</span>
      ) : (
        <Skeleton className="w-16 h-2" />
      )}
    </Badge>
  );
}
