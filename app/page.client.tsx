"use client";
import { useState } from "react";
import { getRecipe } from "./actions";
import { Button } from "@/components/ui/button";
import { Recipe } from "@/lib/types";
import { Recepie } from "./recipe";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [generation, setGeneration] = useState<Recipe | null>(null);

  return (
    <div className="py-6 flex flex-col gap-6 justify-center items-center">
      <Badge variant="outline">Structured data + Component</Badge>
      <Button
        onClick={async () => {
          const recipe = await getRecipe("Lasagna");
          setGeneration(recipe);
        }}
      >
        Generate Lasagna Recipe
      </Button>
      {/*<pre className="w-[500px] h-96 overflow-y-auto bg-stone-100 rounded-lg p-4">
        {generation}
      </pre>*/}
      {generation && <Recepie recipe={generation} />}
    </div>
  );
}
