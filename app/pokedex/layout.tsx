import { Suspense } from "react";
import { PokemonTypeSkeleton } from "./components";
import { PokemonTypeFilters } from "./components";

export default async function PokedexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="bg-stone-50 border-r w-32 min-h-screen py-4">
        <Suspense fallback={<PokemonTypeSkeleton />}>
          <PokemonTypeFilters />
        </Suspense>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
