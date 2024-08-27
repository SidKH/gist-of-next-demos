"use server";

import { redirect } from "next/navigation";

export async function myAction(formData: FormData) {
  redirect(`/confetti?message=${formData.get("message")}`);
}
