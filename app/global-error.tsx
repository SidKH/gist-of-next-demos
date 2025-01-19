"use client";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function GlobalError() {
  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Ooops!</h1>
        <p>Something went wrong!</p>
        <Button className="mt-4" asChild>
          <Link className="text-blue-500" href="/">
            <ArrowLeft /> Back to home
          </Link>
        </Button>
      </body>
    </html>
  );
}
