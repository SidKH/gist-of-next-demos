import Sidebar from "@/components/sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex h-full">
          <Sidebar />
          <div className="flex-1 h-full flex justify-center pt-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
