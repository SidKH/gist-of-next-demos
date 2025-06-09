import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 border-t">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link
            className="underline text-sm text-muted-foreground"
            prefetch={false}
            href="/privacy"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            className="underline text-sm text-muted-foreground"
            prefetch={false}
            href="/terms"
          >
            Terms
          </Link>
        </li>
        <li>
          <Link
            className="underline text-sm text-muted-foreground"
            prefetch={false}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}
