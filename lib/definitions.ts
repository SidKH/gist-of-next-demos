export interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

export interface PokemonType {
  id: number;
  name: string;
  pokemon: Pokemon[];
}

export interface PokemonTypeResponse {
  id: number;
  name: string;
  pokemon: Pokemon[];
}
