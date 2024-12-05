"use client";

import { updateProfile } from "@/app/actions";
import { useActionState } from "react";

export function ContactForm() {
  const [actionState, action] = useActionState(updateProfile, {
    message: "",
  });

  return (
    <form className="max-w-md w-full flex flex-col relative" action={action}>
      <label className="text-sm text-muted-foreground mb-1" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        defaultValue={actionState.payload?.get("email") as string}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-3"
      />
      <label className="text-sm text-muted-foreground mb-1" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        defaultValue={actionState.payload?.get("message") as string}
        className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-3"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-3"
      >
        Submit
      </button>
      {actionState.message && (
        <p className="absolute -bottom-10 animate-in slide-in-from-bottom-1 w-full text-sm text-muted-foreground text-center">
          {actionState.message}
        </p>
      )}
    </form>
  );
}
