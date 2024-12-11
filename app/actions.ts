"use server";

import { experimental_generateImage as generateImage } from "ai";
import { openai } from "@ai-sdk/openai";

export async function generateAIImage(state: any, formData: FormData) {
  const prompt = formData.get("prompt") as string;

  const { image } = await generateImage({
    model: openai.image("dall-e-3"),
    prompt: prompt,
    size: "1024x1024",
  });

  return image.base64;
}
