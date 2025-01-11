"use client";

import useSWR from "swr";
import { getRandomDog } from "./data";
import { Button } from "@/components/ui/button";

export function RandomDog() {
  const { data, isLoading, mutate, isValidating } = useSWR(
    "randomDog",
    getRandomDog,
    {
      revalidateOnMount: false,
    }
  );

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-64 h-64 flex justify-center items-center bg-zinc-50 p-8">
        {isLoading || isValidating ? (
          <span>Loading...</span>
        ) : (
          <img className="max-w-full max-h-full" src={data} alt="Random Dog" />
        )}
      </div>
      <Button onClick={() => mutate("randomDog")}>Another dog</Button>
    </div>
  );
}
