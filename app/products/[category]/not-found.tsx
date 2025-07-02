"use client";

// #region imports
import { Button } from "@/components/ui/button";
import illustration from "./illustration.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
// #endregion

export default function NotFound() {
  const params = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mb-6 text-2xl font-medium">
        We are out of {params.category}
      </p>
      <div className="bg-zinc-950 w-48 p-6 rounded-xl mb-6">
        <Image
          src={illustration}
          alt="Not found"
          className="mb-4"
        />
      </div>

      <Button size="sm">Try other products</Button>
    </div>
  );
}
