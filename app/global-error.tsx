"use client";

import Image from "next/image";
import "./globals.css";

export default function GlobalError() {
  return (
    <html>
      <body className="flex justify-center items-center h-screen w-screen bg-[#FCFAFC]">
        <Image
          src="/error.gif"
          alt="logo"
          width={480}
          height={360}
        />
      </body>
    </html>
  );
}
