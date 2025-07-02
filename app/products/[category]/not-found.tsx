"use client";

// #region imports
import { Button } from "@/components/ui/button";
import illustration from "../../illustration.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
// #endregion

export default function NotFound() {
  const params = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mb-6 text-xl font-medium">
        Category &quot;{params.category}&quot;
        doesn&apos;t exist
      </p>
      <div className="bg-zinc-950 w-48 p-6 rounded-xl mb-6">
        <Image
          src={illustration}
          alt="Not found"
          className="mb-4"
        />
      </div>

      <Button size="sm">
        Check existing categories
      </Button>
    </div>
  );
}
