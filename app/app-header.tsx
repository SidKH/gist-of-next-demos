"use client";

import { User } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function AppHeader() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between px-4 h-16 border-b">
      <MainMenu />
      {session?.user && <UserProfile user={session.user} />}
    </header>
  );
}

function MainMenu() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Link href="/nav-link-1">Nav Link 1</Link>
      <Link href="/nav-link-2">Nav Link 2</Link>
    </div>
  );
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
