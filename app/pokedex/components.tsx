import { getPokemonByType, getPokemonTypes } from "@/lib/data";
import TypeLink from "./type-link";

export async function PokemonTypeFilters() {
  const types = await getPokemonTypes();
  return (
    <div className="flex flex-col gap-2">
      {types.map((type) => (
        <TypeLink key={type.name} type={type.name} />
      ))}
    </div>
  );
}

export function PokemonTypeSkeleton() {
  return (
    <div className="flex flex-col gap-5 p-2 px-6">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="h-5 w-full animate-pulse rounded-md bg-stone-200"
        ></div>
      ))}
    </div>
  );
}

export async function PokemonList({ type }: { type: string }) {
  const pokemon = await getPokemonByType(type);
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {pokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}

export function PokemonListSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="p-4 h-[129px] w-full">
          <div className="h-full w-full animate-pulse bg-stone-100 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
