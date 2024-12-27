import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
  handlers,
  signIn,
  signOut,
  auth: originalAuth,
} = NextAuth({
  providers: [GitHub],
});

export const auth = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay
  return originalAuth();
};
