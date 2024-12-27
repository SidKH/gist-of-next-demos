import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Transform Your Workflow with{" "}
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            ProductName
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Streamline your business operations and boost productivity with our
          all-in-one platform. Join thousands of satisfied customers today.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <Button asChild>
            <a href="/signup">Get Started Free</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/demo">
              Book a Demo
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
