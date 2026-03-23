import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="dark flex min-h-dvh w-full flex-col items-center justify-center bg-background px-6 py-16 text-foreground">
      <section className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Home
        </h1>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/about" transitionTypes={["slide-left"]}>
              Open about page
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
