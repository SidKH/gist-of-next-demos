import { Badge } from "@/components/ui/badge";
import ClientComponentB from "./client-component-b";

export default function ClientComponentA() {
  return (
    <div className="rounded-xl relative  border flex-1 justify-center items-center flex-shrink-0 w-full h-full p-12 pt-0 flex flex-col">
      <Badge variant="outline" className="-mt-3 mb-10 bg-white">
        Client component
      </Badge>
      <ClientComponentB />
    </div>
  );
}
