"use client";

import Link from "next/link";
import { useState } from "react";

export function HoverPrefetchLink(
  props: LinkProps & React.ComponentProps<"a">
) {
  const [active, setActive] = useState(false);

  return (
    <Link
      {...props}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    />
  );
}
