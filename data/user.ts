import { auth } from "@/auth";
import { cache } from "react";

export const getSession = cache(async function getSession() {
  return auth();
});
