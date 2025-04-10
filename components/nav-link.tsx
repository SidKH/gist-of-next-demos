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

  const currentState =
    activeState && isActive
      ? activeState
      : props.children;

  return (
    <Link
      {...props}
      className="flex gap-2 items-center"
    >
      <LoadingStatus
        pendingState={pendingState || currentState}
      >
        {currentState}
      </LoadingStatus>
    </Link>
  );
}
