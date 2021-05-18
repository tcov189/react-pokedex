import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import Filter from "../../Filter";

import ScaleLoader from "react-spinners/ScaleLoader";

export default function PokemonList() {
  const [filter, setFilter] = useState("");

  const [pokemonResults, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      let pokemonList = {};

      if (!localStorage.getItem("pokemonList")) {
        const res = await fetchGraphQL();

        localStorage.setItem("pokemonList", JSON.stringify(res.data.pokemon));

        pokemonList = res.data.pokemon;
      } else {
        pokemonList = JSON.parse(localStorage.getItem("pokemonList"));
      }

      setPokemon(pokemonList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="py-2">
      {!pokemonResults.length && (
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-lg text-gray-700 pb-4">Loading...</p>
          <ScaleLoader color="#f2f2f2" size={70} />
        </div>
      )}

      {pokemonResults.length > 1 && (
        <Filter
          placeHolder="Search by Pokemon name..."
          filter={filter}
          setFilter={setFilter}
        />
      )}

      {pokemonResults
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((pokemon, index) => {
          const primaryType = pokemon.types.filter((type) => type.slot === 1 )[0];
          const secondaryType = pokemon.types.filter((type) => type.slot !== 1 )[0];

          pokemon.primary_type = primaryType;
          pokemon.secondary_type = secondaryType;

          return <PokemonCard key={pokemon.name} pokemon={pokemon} />
        })}
    </div>
  );
}

const query = `
query getDex {
  pokemon: pokemon_v2_pokemon(where: {is_default: {_eq: true}}) {
    name
    id
    order
    types: pokemon_v2_pokemontypes {
      slot
      type: pokemon_v2_type {
        name
      }
    }
  }
}`;

async function fetchGraphQL() {
  const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: {},
      operationName: "getDex",
    }),
  });

  return await result.json();
}
