import { links } from "@/lib/utils";
import { NavLink } from "./nav-link";
import { Loader2 } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-48 bg-muted p-4">
      <ul className="divide-y">
        {links.map((link) => (
          <li key={link.href} className="py-2">
            <NavLink
              prefetch={false}
              href={link.href}
              activeState={
                <span className="text-pink-600">
                  {link.label}
                </span>
              }
              pendingState={
                <span className="text-muted-foreground flex gap-2 items-center">
                  {link.label}
                  <span className="slide-in">
                    <Loader2 className="w-3 h-3 animate-spin" />
                  </span>
                </span>
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
