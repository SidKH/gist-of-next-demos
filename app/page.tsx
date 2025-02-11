"use client";

// #region Imports
import { Button } from "@/components/ui/button";
import { pokemonTypes } from "./pokemon-types";
import useSWR from "swr";
import { useState } from "react";
import { Pokemon } from "@/lib/definitions";
// #endregion

export default function Home() {
  const [selectedType, setSelectedType] = useState<string>("water");

  const { data } = useSWR(
    `https://pokeapi.co/api/v2/type/${selectedType}`,
    async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      return data.pokemon.map((p: { pokemon: Pokemon }) => p.pokemon);
    },
    { keepPreviousData: true }
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex flex-col gap-4 w-[512px]">
        <div className="grid grid-cols-3 gap-4">
          {pokemonTypes.map((type) => {
            return (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            );
          })}
        </div>
        <hr className="opacity-50" />
        <div className="grid grid-cols-3 gap-4">
          {data?.map((pokemon: { name: string; url: string }) => {
            const id = pokemon.url.split("/")[6];
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return (
              <div
                className="border w-40 h-40 flex flex-col items-center rounded-lg"
                key={pokemon.name}
              >
                <img width={96} height={96} src={imageUrl} alt={pokemon.name} />
                <p className="text-sm">{pokemon.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
