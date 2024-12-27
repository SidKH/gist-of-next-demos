import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { MainMenu } from "./main-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <header className="h-16 border-b flex items-center justify-end px-4">
            <MainMenu />
          </header>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
