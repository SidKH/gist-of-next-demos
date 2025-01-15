export const dynamic = "force-dynamic";

import { revalidateTag } from "next/cache";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const dog = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      tags: ["randomDog"],
    },
  })
    .then((res) => res.json())
    .then((data) => data.message);

  async function refetchDog() {
    "use server";
    revalidateTag("randomDog");
  }

  return (
    <div className="flex flex-col w-screen h-screen justify-center gap-4 items-center">
      <div className="w-64 h-64 flex justify-center items-center bg-zinc-50 p-8">
        <img className="max-w-full max-h-full" src={dog} alt="Random Dog" />
      </div>
      <form action={refetchDog}>
        <Button>Another dog</Button>
      </form>
    </div>
  );
}
