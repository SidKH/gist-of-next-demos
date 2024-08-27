"use client";

import { myAction } from "./actions";

export function MyForm() {
  return (
    <form action={myAction}>
      <textarea
        required
        onKeyDown={(e) => {
          if (
            (e.ctrlKey || e.metaKey) &&
            (e.key === "Enter" || e.key === "NumpadEnter")
          ) {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit();
          }
        }}
        name="message"
        className="w-full min-h-[100px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-sm"
      >
        Submit
      </button>
    </form>
  );
}
