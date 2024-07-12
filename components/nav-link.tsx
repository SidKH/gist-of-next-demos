"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps } from "react";

export function NavLink({
  className,
  activeClassName,
  startsWith,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = startsWith
    ? pathname.startsWith(startsWith)
    : pathname === props.href;

  return (
    <Link
      className={cn(className, isActive && activeClassName)}
      {...props}
    />
  );
}

export type NavLinkProps = {
  activeClassName?: string;
  startsWith?: string;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>;
