// #region imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { createClient } from "redis";
// #endregion

const redis = await createClient({
  url: process.env.REDIS_URL,
}).connect();

export default async function Home() {
  const value = await redis.get("myKey");

  return (
    <div className="flex flex-col gap-8 items-center h-screen justify-center">
      <div className="text-center text-4xl font-bold">
        {value ?? "No value"}
      </div>
      <form
        className="flex gap-4"
        action={async (formData) => {
          "use server";
          const value = formData.get("value") as string;
          await redis.set("myKey", value);
          revalidatePath("/");
        }}
      >
        <Input type="text" name="value" />
        <Button type="submit" className="min-w-24">
          Set
        </Button>
      </form>
    </div>
  );
}
