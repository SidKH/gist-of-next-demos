import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/auht";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    throw new Response("Unauthorized", {
      status: 401,
    });
  }

  return (
    <Button
      onClick={async () => {
        "use server";
        console.log("Deleting important stuff 🚨");
      }}
    >
      Delete important stuff
    </Button>
  );
}
