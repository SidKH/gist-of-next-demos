"use server";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export async function getRecipe(input: string) {
  const { object } = await generateObject({
    model: openai("gpt-3.5-turbo"),
    system: "You generate recipes",
    prompt: `Generate a recipe for ${input}.`,
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(
          z.object({ name: z.string(), amount: z.string() })
        ),
        steps: z.array(z.string()),
      }),
    }),
  });

  return object.recipe;
}
