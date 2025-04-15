"use client";

export const dynamic = "force-dynamic";

export function ClientComponent() {
  throw new Error("ClientComponent");

  return (
    <div onClick={() => alert("clicked")}>
      ClientComponent
    </div>
  );
}
