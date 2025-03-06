import { fetchData, fetchMetadata } from "./data";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const data = await fetchMetadata();
  return {
    title: data.title,
  };
}

export default async function Home() {
  const data = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {data.content}
    </main>
  );
}
