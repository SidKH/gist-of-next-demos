import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Button asChild>
        <Link prefetch={false} href="/my-page">
          Go to My Page
        </Link>
      </Button>
    </main>
  );
}
