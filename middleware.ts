import {
  NextRequest,
  NextResponse,
} from "next/server";

function auth() {
  return false;
}

export function middleware(request: NextRequest) {
  console.log(
    "🚨 middleware",
    request.method,
    request.url
  );

  if (request.method === "POST" && !auth()) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    },
  ],
};
