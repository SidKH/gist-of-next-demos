import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const host = headersList.get("host") || "default-domain.com";

  // Extract the domain (remove port if present)
  const domain = host.split(":")[0];

  console.log("Domain:", domain);

  return {
    title: "My App",
    description: "My App Description",
    metadataBase: new URL(`https://${domain}`),
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
