import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/auth";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const userIsAdmin = await isAdmin(); // false
  if (!userIsAdmin) {
    notFound();
  }

  return (
    <Button
      onClick={async () => {
        "use server";
        const userIsAdmin = await isAdmin(); // false
        if (!userIsAdmin) {
          return { error: "Unauthorized" };
        }
        // Delete important records
        return "Successfully deleted 🔥";
      }}
    >
      Delete important stuff
    </Button>
  );
}
