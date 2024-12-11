"use client";
import { useActionState } from "react";
import { generateAIImage } from "./actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export function ImageGenerator() {
  const [image, formAction, isPending] = useActionState(generateAIImage, null);

  if (image) {
    return (
      <img
        src={`data:image/png;base64,${image}`}
        alt="Generated image"
        className="w-72 rounded-md"
      />
    );
  }

  if (isPending) {
    return (
      <img
        src="/loading-meme.gif"
        alt="Loading"
        className="max-w-sm rounded-md"
      />
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <Textarea placeholder="Enter a prompt" name="prompt" />
      <Button type="submit">Generate image</Button>
    </form>
  );
}
