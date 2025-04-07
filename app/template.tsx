import { unstable_ViewTransition as ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ViewTransition name="page">{children}</ViewTransition>
    </div>
  );
}
