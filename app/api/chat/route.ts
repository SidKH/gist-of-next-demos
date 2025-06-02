import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST() {
  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: [
      {
        role: "user",
        content: "Write a short poem (max 100 words)",
      },
    ],
  });

  return result.toDataStreamResponse();
}
