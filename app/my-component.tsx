"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function MyComponent() {
  return (
    <Button
      onClick={() => {
        doSomething();
        redirect("/page-2");
      }}
    >
      Click me
    </Button>
  );
}

function doSomething() {
  console.log("doSomething");
}
