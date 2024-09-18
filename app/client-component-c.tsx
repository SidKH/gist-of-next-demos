import { Badge } from "@/components/ui/badge";

export default function ClientComponentC() {
  return (
    <div className="rounded-xl relative  border flex-1 justify-start items-center flex-shrink-0 w-full h-full p-12 pt-0 flex flex-col">
      <Badge variant="outline" className="-mt-3 mb-10 bg-white">
        Deeply nested client component
      </Badge>
      <h2 className="text-2xl font-bold">How can I get user info?</h2>
    </div>
  );
}
