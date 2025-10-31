import { cookies } from "next/headers";

export async function fetchData() {
  const cookieStore = await cookies();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Dynamic Data";
}