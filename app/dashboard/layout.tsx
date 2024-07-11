import { NavLink, NavLinkProps } from "@/components/nav-link";

function DashboardNavLink(props: NavLinkProps) {
  return (
    <NavLink
      className="hover:text-foreground"
      activeClassName="text-foreground underline"
      {...props}
    />
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <nav className="w-40 p-4 border-r">
        <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
          <li>
            <DashboardNavLink href="/dashboard/settings">
              Settings
            </DashboardNavLink>
          </li>
          <li>
            <DashboardNavLink href="/dashboard/analytics">
              Analytics
            </DashboardNavLink>
          </li>
          <li>
            <DashboardNavLink href="/dashboard/profile">
              Profile
            </DashboardNavLink>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-1">{children}</div>
    </div>
  );
}
