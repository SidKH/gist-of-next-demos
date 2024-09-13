"use server";

import { getMovieTrailer, Loading, MovieTrailer } from "@/components/movie";
import { openai } from "@ai-sdk/openai";
import { streamUI } from "ai/rsc";
import { z } from "zod";

export async function ai(prompt: string) {
  const result = await streamUI({
    model: openai("gpt-4o"),
    prompt: prompt,
    text: ({ content }) => <div>{content}</div>,
    tools: {
      getMovie: {
        description: "Get the movie with the given title and year",
        parameters: z.object({
          title: z.string(),
          year: z.string(),
        }),
        generate: async function* ({ title, year }) {
          yield <Loading />;
          const trailer = await getMovieTrailer(title, year);
          return <MovieTrailer trailer={trailer} />;
        },
      },
    },
  });
  return result.value;
}
