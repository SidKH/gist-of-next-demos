"use server";

import { updateItemInDb } from "@/lib/data";

type State = {
  success?: boolean;
  content: string;
};

export async function editItem(
  previousState: State,
  formData: FormData
): Promise<State> {
  const id = formData.get("id") as string;
  const content = formData.get("content") as string;
  const updatedItem = await updateItemInDb(id, content);
  return { success: true, content: updatedItem.content };
}
