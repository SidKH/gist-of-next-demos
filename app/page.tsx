"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ai } from "./actions";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [component, setComponent] = useState<React.ReactNode>();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className=" flex flex-col gap-4 mb-8"
        onSubmit={async (e) => {
          e.preventDefault();
          setComponent(await ai(e.currentTarget.prompt.value));
        }}
      >
        <Input
          autoComplete="off"
          name="prompt"
          placeholder="Enter your prompt"
        />
        <Button>Stream Component</Button>
      </form>
      <div className="max-w-xl w-screen h-96 mx-auto p-6 bg-stone-100 rounded-lg relative flex justify-center items-center">
        {component}
      </div>
    </div>
  );
}
