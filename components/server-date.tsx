import { connection } from "next/server";

export async function ServerDate() {
  await connection();
  return <div>{new Date().toISOString()}</div>;
}
