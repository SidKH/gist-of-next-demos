import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { AppHeader } from "./app-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppHeader />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
