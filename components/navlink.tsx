"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {

  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link className={cn("text-muted-foreground py-1.5 px-4 flex hover:text-white rounded-md", isActive && "bg-white/10 text-white")} href={href}>
      {children}
    </Link>
  );
}