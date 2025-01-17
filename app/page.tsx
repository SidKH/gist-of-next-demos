import { auth } from "@/auth";
import SignIn from "@/components/sign-in";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {session ? <p>Signed in as {session.user?.email}</p> : <SignIn />}
    </main>
  );
}
