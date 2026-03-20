import { ViewTransition } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <ViewTransition
          default={{
            default: "none",
            fade: "fade",
            "slide-left": "slide-left",
            "slide-right": "slide-right",
          }}
        >
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
