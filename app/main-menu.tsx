"use client";

import { User } from "next-auth";
import { useSession } from "next-auth/react";

export function MainMenu() {
  const { data: session } = useSession();

  return <div>{session?.user && <UserProfile user={session.user} />}</div>;
}

function UserProfile({ user }: { user: User }) {
  if (!user.image) return null;
  return (
    <img
      src={user.image}
      alt="Profile picture"
      width={32}
      height={32}
      className="rounded-full animate-in fade-in duration-400 cursor-pointer"
    />
  );
}
