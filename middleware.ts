import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(
    "🚨 middleware",
    request.method,
    request.url
  );
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-action" },
      ],
    },
  ],
};
