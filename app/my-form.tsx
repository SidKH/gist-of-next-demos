"use client";
import { myAction } from "./actions";

export function MyForm() {
  return (
    <form action={myAction}>
      <textarea
        required
        onKeyDown={(e) => {
          if (e.metaKey && e.key === "Enter") {
            e.preventDefault();
            e.currentTarget.form?.submit();
          }
        }}
        placeholder="Type your message here..."
        name="message"
        className="w-full p-2 min-h-[100px] border rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
      />
      <span className="text-sm">Press ⌘+Enter to submit</span>
    </form>
  );
}
