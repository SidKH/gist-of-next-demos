import { Button } from "@/components/ui/button";
import { waitUntil } from "@vercel/functions";
import { redirect } from "next/navigation";

export default function Home() {
  async function action() {
    "use server";
    const id = await primaryTask();
    backgroundTask(id);
    redirect("/success");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <form action={action}>
        <Button type="submit">Server action</Button>
      </form>
    </main>
  );
}

async function primaryTask() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.log("Primary task - 300ms");
  return "string";
}

async function backgroundTask(param: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Background task - 1000ms");
}
