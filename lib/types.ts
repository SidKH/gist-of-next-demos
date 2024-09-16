import { z } from "zod";

export const RecipeSchema = z.object({
  name: z.string(),
  ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
  steps: z.array(z.string()),
});

export type Recipe = z.infer<typeof RecipeSchema>;
