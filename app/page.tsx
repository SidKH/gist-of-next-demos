"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
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

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
