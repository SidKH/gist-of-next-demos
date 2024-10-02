"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Error({ reset }: { reset: () => void }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h2 className="text-lg">Something went wrong!</h2>
      <Image src="/image.png" alt="Error" width={300} height={300} />
      <Button
        disabled={isPending}
        onClick={() => {
          reset();
        }}
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Try again
      </Button>
    </div>
  );
}
