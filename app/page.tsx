import { Button } from "@/components/ui/button";
import { refresh, revalidatePath } from "next/cache";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col gap-4 justify-center bg-zinc-50 font-sans dark:bg-black">
      <form
        action={async () => {
          "use server";
          revalidatePath("/");
        }}
      >
        <Button>revalidatePath</Button>
      </form>
      <form
        action={async () => {
          "use server";
          refresh();
        }}
      >
        <Button>refresh</Button>
      </form>
    </div>
  );
}
