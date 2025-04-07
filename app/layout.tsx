import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="flex gap-4 p-4 text-sm justify-center">
            <Link href="/page-1">Page 1</Link>
            <Link href="/page-2">Page 2</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
