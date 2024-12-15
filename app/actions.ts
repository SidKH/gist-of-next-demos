import { redirect } from "next/navigation";

export async function action() {
  "use server";
  const id = await primaryTask();
  await backgroundTask(id);
  redirect("/success");
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
