import { createClient } from "@/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.from("notes").select();
  return (
    <main className="flex min-h-screen justify-center items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Next.js
      </h1>
    </main>
  );
}
