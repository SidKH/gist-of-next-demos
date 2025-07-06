// #region Imports
import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/auth";
export const dynamic = "force-dynamic";
// #endregion

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
        const userIsAdmin = await isAdmin();
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
