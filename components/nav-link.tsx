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

export default function PendingStatus({
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
    <Link {...props}>
      <PendingStatus
        pendingState={pendingState || currentState}
      >
        {currentState}
      </PendingStatus>
    </Link>
  );
}
