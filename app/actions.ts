"use server";

import { updateItemInDb } from "@/lib/data";

type State = {
  content: string;
  success?: boolean;
};

export async function editItem(
  previousState: State,
  formData: FormData
): Promise<State> {
  const id = formData.get("id") as string;
  const content = formData.get("content") as string;
  const item = await updateItemInDb(id, content);
  return { content: item.content, success: true };
}
