import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 text-sm circle">
        <li>
          <Link className="text-blue-500 underline" href="/route-pages-1">
            Pages Router 1
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 underline" href="/route-pages-2">
            Pages Router 2
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 underline" href="/route-app-1">
            App Router 1
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 underline" href="/route-app-2">
            App Router 2
          </Link>
        </li>
      </ul>
    </nav>
  );
}
