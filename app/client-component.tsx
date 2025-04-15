"use client";

export function ClientComponent() {
  throw new Error("ClientComponent");

  return (
    <div onClick={() => alert("clicked")}>
      ClientComponent
    </div>
  );
}
