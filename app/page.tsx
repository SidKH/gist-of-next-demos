import { Button } from "@/components/ui/button";
import { refresh, revalidatePath } from "next/cache";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col gap-4 justify-center bg-zinc-50 font-sans dark:bg-black">
      <CachedComponent />

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

async function CachedComponent() {
  "use cache";
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return (
    <div className="border-dashed border-2 p-4 w-40 text-center rounded-md">
      {data.results[0].name.first}
    </div>
  );
}
