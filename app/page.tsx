import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getRandomDog } from "./data";
import { getQueryClient } from "./get-query-client";
import { RandomDog } from "./RandomDog";

export default function Home() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["randomDog"],
    queryFn: getRandomDog, // No await, passing a promise
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RandomDog />
      </HydrationBoundary>
    </main>
  );
}
