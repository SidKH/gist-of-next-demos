"use client";

import { getRandomDog } from "./data";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export function RandomDog() {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["randomDog"],
    queryFn: getRandomDog,
  });

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-64 h-64 flex justify-center items-center bg-zinc-50 p-8">
        {isLoading || isRefetching ? (
          <Loader2 className="w-8 h-8 animate-spin" />
        ) : (
          <img className="max-w-full max-h-full" src={data} alt="Random Dog" />
        )}
      </div>
      <Button onClick={() => refetch()}>Another Dog</Button>
    </div>
  );
}
