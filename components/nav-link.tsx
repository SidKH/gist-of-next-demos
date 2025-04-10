"use client";

import Link, {
  LinkProps,
  useLinkStatus,
} from "next/link";
import { usePathname } from "next/navigation";
import {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

export default function LoadingStatus({
  children,
  pendingState,
}: {
  children: ReactNode;
  pendingState: ReactNode;
}) {
  const { pending } = useLinkStatus();
  return pending ? pendingState : children;
}

type NavLinkProps = LinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps
  > & {
    pendingState?: ReactNode;
    activeState?: ReactNode;
  };

export function NavLink({
  pendingState,
  activeState,
  ...props
}: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === props.href;

  return (
    <Link
      {...props}
      className="flex gap-2 items-center"
    >
      <LoadingStatus pendingState={pendingState}>
        {isActive ? activeState : props.children}
      </LoadingStatus>
    </Link>
  );
}
