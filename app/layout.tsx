import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";

export async function generateMetadata() {
  const headersList = headers();

  console.log(headersList);

  return {
    title: "My App",
    description: "My App Description",
    metadataBase: new URL("https://my-app.com"),
    alternates: {
      canonical: "./",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
