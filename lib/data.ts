import { cookies } from "next/headers";

export async function fetchData(id: string) {
  const cookieStore = await cookies();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Dynamic Data ${id}`;
}