import { ServerDate } from "@/components/server-date";

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <ServerDate />
    </div>
  );
}
