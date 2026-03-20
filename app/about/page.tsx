import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center bg-background px-6 py-16 text-foreground">
      <section className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          About
        </h1>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/" transitionTypes={["none"]}>
              <ArrowLeft />
              Return home
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
