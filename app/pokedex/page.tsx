import { Suspense } from "react";
import { PokemonList, PokemonListSkeleton } from "./components";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const { type } = await searchParams;
  return (
    <Suspense key={type} fallback={<PokemonListSkeleton />}>
      <PokemonList type={type} />
    </Suspense>
  );
}
