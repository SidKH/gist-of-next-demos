import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("myCookie");
  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center h-screen">
        <p className="text-7xl font-medium">
          {cookie?.value}
        </p>
        <form
          action={async function () {
            "use server";
            const cookieStore = await cookies();
            const cookie = cookieStore.get("myCookie");
            cookieStore.set(
              "myCookie",
              (
                Number(cookie?.value ?? 0) + 1
              ).toString()
            );
          }}
        >
          <Button>Increment cookie value</Button>
        </form>
      </div>
    </div>
  );
}
