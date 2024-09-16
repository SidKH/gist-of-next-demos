import { Button } from "@/components/ui/button";
import { Recipe } from "@/lib/types";
import { useState } from "react";

export function Recepie({ recipe }: { recipe: Recipe }) {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, recipe.steps.length - 1));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-white max-w-md border divide-y shadow rounded-md flex flex-col">
      <h1 className="text-2xl font-bold p-4">{recipe.name}</h1>
      <div className="p-4">
        <p className="font-bold mb-2">Ingredients:</p>
        <ul className="flex flex-wrap gap-1 text-xs text-muted-foreground">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <p className="font-bold mb-2">Step {currentStep + 1}</p>
        <div className="min-h-28">
          <p>{recipe.steps[currentStep]}</p>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={goToNextStep}
            disabled={currentStep === recipe.steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
