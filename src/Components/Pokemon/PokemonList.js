import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Filter from "../../Filter";

export default function PokemonList() {
  const pokemonArray = [
    {
      id: 1,
      name: "Bulbasaur",
      dex_number: "001",
      types: {
        primary: "grass",
        secondary: "poison",
      },
    },
    {
      id: 2,
      name: "Charmander",
      dex_number: "004",
      types: {
        primary: "fire",
      },
    },
    {
      id: 3,
      name: "Squirtle",
      dex_number: "007",
      types: {
        primary: "water",
      },
    },
  ];

  const [pokemon, setPokemon] = useState(pokemonArray);

  const [filter, setFilter] = useState("");

  return (
    <div>
      <Filter
        placeHolder="Search by name..."
        filter={filter}
        onChangeHandler={(e) => setFilter(e.target.value)}
      />

      {pokemon
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((pokemon, index) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
    </div>
  );
}
