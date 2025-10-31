"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {

  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link className={cn("py-2 px-4 flex hover:opacity-90", isActive && "text-sky-400")} href={href}>
      {children}
    </Link>
  );
}