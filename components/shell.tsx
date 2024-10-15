import { cn } from "@/lib/utils";
import React from "react";

export function Shell({
  children,
  fileName,
}: {
  children: React.ReactNode;
  fileName: string;
}) {
  let client = true;

  try {
    React.useEffect(() => {}, []);
  } catch (error) {
    client = false;
  }

  return (
    <div
      className={cn(
        "border border-stone-400 border-dashed relative m-12 rounded-md",
        client ? "bg-blue-50" : "bg-white"
      )}
    >
      <p
        className={cn(
          "font-mono absolute left-3 -top-3 rounded-full px-2 text-sm",
          client ? "bg-blue-600 text-white" : "bg-stone-950 text-white"
        )}
      >
        {fileName} ({client ? "client" : "server"})
      </p>
      {children}
    </div>
  );
}
