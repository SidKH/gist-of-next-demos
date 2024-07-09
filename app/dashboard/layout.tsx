import { fakeFetch, sleep } from "@/lib/utils";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await fakeFetch({
    name: "Layout",
    time: 2000,
  });

  return <div>{children}</div>;
}
