import { fakeFetch, sleep } from "@/lib/utils";

export default async function Page() {
  await fakeFetch({
    name: "Page",
    time: 1500,
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold">Dashboard</h1>
    </div>
  );
}
