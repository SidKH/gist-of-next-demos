"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect } from "react";

export default function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
  } = useChat();

  useEffect(() => {
    if (messages.length === 0) {
      append({
        role: "user",
        content: "start",
      });
    }
  }, [append, messages]);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch divide-y dark:divide-zinc-800">
      {messages.slice(1).map((message) => (
        <div
          key={message.id}
          className="py-4 whitespace-pre-wrap"
        >
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return (
                  <div key={`${message.id}-${i}`}>
                    {part.text}
                  </div>
                );
            }
          })}
        </div>
      ))}

      <form
        className="fixed bottom-0 w-full max-w-md p-2 pb-8 bg-white"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full p-2 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
