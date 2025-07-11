"use client";

import Link, { LinkProps } from "next/link";
import { useState } from "react";

export function HowerPrefetchLink(
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
