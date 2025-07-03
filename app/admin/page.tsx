import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/auht";
import { notFound } from "next/navigation";

export default async function AdminPage() {
  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    notFound();
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
