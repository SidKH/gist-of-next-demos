import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Badge className="mb-6 font-mono">
        app/not-found.tsx
      </Badge>
      <h1 className="text-4xl font-medium">404</h1>
      <p className="">Page not found</p>
    </div>
  );
}
