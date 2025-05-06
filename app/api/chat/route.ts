import { openai } from "@ai-sdk/openai";
import { smoothStream, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    experimental_transform: smoothStream(),
  });

  return result.toDataStreamResponse();
}
