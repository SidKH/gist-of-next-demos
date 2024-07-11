import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <nav className="w-40 p-4 border-r">
        <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <Link href="/dashboard/analytics">Analytics</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-1">{children}</div>
    </div>
  );
}
