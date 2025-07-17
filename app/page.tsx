import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <form
        action={async () => {
          "use server";
        }}
      >
        <Button type="submit">Server Action</Button>
      </form>
    </div>
  );
}
