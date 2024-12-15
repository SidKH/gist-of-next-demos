import { Button } from "@/components/ui/button";
import { action } from "./actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <form action={action}>
        <Button type="submit">Server action</Button>
      </form>
    </main>
  );
}
