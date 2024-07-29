"use client";

import { useRouter } from "next/navigation";

export function TestLink(props) {
  const router = useRouter();

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href);
      }}
      {...props}
    />
  );
}
