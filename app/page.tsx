"use client";

import { Button } from "@/components/ui/button";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
  } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch divide-y dark:divide-zinc-800">
      {messages.map((message) => (
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
        <div className="flex p-4 gap-2 justify-center">
          <Button
            onClick={() =>
              append({
                role: "user",
                content: "What is 2 + 2",
              })
            }
            variant="outline"
          >
            What is 2 + 2
          </Button>
          <Button
            onClick={() =>
              append({
                role: "user",
                content: "Write a poem",
              })
            }
            variant="outline"
          >
            Write a poem
          </Button>
        </div>
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
