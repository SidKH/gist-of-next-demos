import { Shell } from "@/components/shell";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Shell fileName="app/dashboard/analytics/events/layout.tsx">
      {children}
    </Shell>
  );
}
