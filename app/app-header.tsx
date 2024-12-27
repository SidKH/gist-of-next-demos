import { auth } from "@/auth";
import { User } from "next-auth";
import Link from "next/link";

export async function AppHeader() {
  const session = await auth();

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
      <Link href="/page-1">Page 1</Link>
      <Link href="/page-2">Page 2</Link>
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
      className="rounded-full cursor-pointer"
    />
  );
}
