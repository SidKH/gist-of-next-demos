import { useEffect } from "react";

export function ClientComponent() {
  useEffect(() => {
    throw new Error("ClientComponent");
  }, []);

  return (
    <div onClick={() => alert("clicked")}>
      ClientComponent
    </div>
  );
}
