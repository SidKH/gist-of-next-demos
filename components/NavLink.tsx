"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

type NavLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    activeClassName?: string;
  };

export function NavLink({
  className,
  activeClassName,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return <Link className={isActive ? activeClassName : className} {...props} />;
}
