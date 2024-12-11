"use client";
import { useActionState } from "react";
import { generateAIImage } from "./actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ImageGenerator() {
  const [image, formAction, isPending] = useActionState(generateAIImage, null);

  if (image) {
    return (
      <img
        src={`data:image/png;base64,${image}`}
        alt="Generated image"
        className="max-w-sm rounded-md"
      />
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <Textarea placeholder="Enter a prompt" name="prompt" />
      <Button disabled={isPending} type="submit">
        Generate image
      </Button>
    </form>
  );
}
