import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
