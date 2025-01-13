"use client";

import useSWR from "swr";
import { getRandomNumber } from "./data";
import { Button } from "@/components/ui/button";

export function RandomNumber() {
  const { data, mutate, isValidating } = useSWR(
    "randomNumber",
    getRandomNumber,
    {
      revalidateOnFocus: false,
      revalidateOnMount: false,
    }
  );

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-64 h-64 flex justify-center items-center bg-zinc-50 p-8">
        {isValidating ? (
          <span>Loading...</span>
        ) : (
          <span>Random Number: {data}</span>
        )}
      </div>
      <Button onClick={() => mutate()}>Another number</Button>
    </div>
  );
}
