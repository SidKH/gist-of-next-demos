// #region imports
import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";

export const maxDuration = 30;
// #endregion

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system:
      "Initiate conversation by asking philosophical question",
    messages,
    temperature: 1,
  });

  return result.toDataStreamResponse();
}
