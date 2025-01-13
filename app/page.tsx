import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getRandomDog } from "./data";
import { RandomDog } from "./RandomDog";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["randomDog"],
    queryFn: getRandomDog,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RandomDog />
      </HydrationBoundary>
    </main>
  );
}
