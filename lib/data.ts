type PokemonType = {
  name: string;
  url: string;
};

type PokemonInType = {
  pokemon: Pokemon;
  slot: number;
};

type Pokemon = {
  name: string;
  url: string;
};

// Adding a more detailed Pokemon type with image
type PokemonDetails = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

export async function getPokemonTypes(): Promise<PokemonType[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const types = await fetch("https://pokeapi.co/api/v2/type");
  const typesData = await types.json();
  return typesData.results.slice(0, 16);
}

// Function to get detailed Pokemon information including image
export async function getPokemonDetails(
  pokemonName: string
): Promise<PokemonDetails> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites.other["official-artwork"].front_default ||
      data.sprites.front_default,
    types: data.types.map((type: { type: { name: string } }) => type.type.name),
  };
}

// Original function to get Pokemon by type
export async function getPokemonByTypeRaw(
  type: string
): Promise<PokemonInType[]> {
  console.log("Fetch types");
  const pokemon = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const pokemonData = await pokemon.json();
  return pokemonData.pokemon;
}

// Function to get Pokemon by type with detailed information including images
export async function getPokemonByType(
  type: string
): Promise<PokemonDetails[]> {
  console.log("Fetch pokemons");
  await new Promise((resolve) => setTimeout(resolve, 500));
  const pokemonInType = await getPokemonByTypeRaw(type);
  const detailedPokemon = await Promise.all(
    pokemonInType.slice(0, 20).map(async (p) => {
      return await getPokemonDetails(p.pokemon.name);
    })
  );

  return detailedPokemon;
}
