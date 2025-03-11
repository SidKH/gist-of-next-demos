export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

export type PokemonType = {
  name: string;
  url: string;
};
