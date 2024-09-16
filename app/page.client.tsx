"use client";

import { useState } from "react";
import { getRecipe } from "./actions";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [generation, setGeneration] = useState("");

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <Button
        onClick={async () => {
          const recipe = await getRecipe("Lasagna");
          setGeneration(JSON.stringify(recipe, null, 2));
        }}
      >
        Lasagna Recipe
      </Button>
      <pre className="w-[500px] h-96 overflow-y-auto bg-stone-100 rounded-lg p-4">
        {generation}
      </pre>
    </div>
  );
}
