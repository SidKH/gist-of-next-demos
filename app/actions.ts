import { redirect } from "next/navigation";

export async function action() {
  "use server";
  backgroundTask();
  await primaryTask();
  redirect("/success");
}

async function primaryTask() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Primary task - 1000ms");
  return "string";
}

async function backgroundTask() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.log("Background task - 300ms");
}
