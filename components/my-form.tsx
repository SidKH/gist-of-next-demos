"use client";

import { useActionState } from "react";
import { MyFormState } from "./my-form.action";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function MyForm({
  action,
}: {
  action: (prevState: MyFormState, formData: FormData) => Promise<MyFormState>;
}) {
  const [state, formAction, isPending] = useActionState(action, {
    success: false,
    error: undefined,
  });

  if (state?.success) {
    return <p>Form submitted successfully</p>;
  }

  return (
    <form ref={formRefCallback} className="flex gap-3 my-4" action={formAction}>
      <Input type="email" placeholder="Email" name="email" />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}

function formRefCallback(node: null | HTMLFormElement) {
  if (node) {
    node.reset();
  }
}
