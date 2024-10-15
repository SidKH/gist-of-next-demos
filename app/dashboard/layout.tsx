"use client";

import { Shell } from "@/components/shell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Shell fileName="app/dashboard/layout.tsx">{children}</Shell>;
}
