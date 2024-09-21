"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

export default function Search() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="w-full">
      <form
        className="w-full flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          startTransition(() => {
            router.push(`?q=${e.currentTarget.search.value}`);
          });
        }}
      >
        <Input name="search" type="search" />
        <Button disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Search
        </Button>
      </form>
    </div>
  );
}
