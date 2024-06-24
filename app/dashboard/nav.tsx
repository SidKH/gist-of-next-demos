"use client";

import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex gap-3">
      <Link className="text-sm underline" href="/dashboard">
        Home
      </Link>
      <Link className="text-sm underline" href="/dashboard/settings">
        Settings
      </Link>
    </nav>
  );
}
