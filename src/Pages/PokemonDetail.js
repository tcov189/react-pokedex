import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "../Layout/Content";
import ScaleLoader from "react-spinners/ScaleLoader";
import PokemonDetailsNav from "../Components/PokemonDetails/PokemonDetailsNav";

export default function PokemonDetail() {
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState(null);

  const getPokemonData = async (id) => {
    try {
      const res = await fetchGraphQL(parseInt(id));

      const pokemonData = res.data.pokemon[0];

      setPokemonData(pokemonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemonData(id);
  }, [id]);

  return (
    <Content>
      {!pokemonData && (
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-lg text-gray-700 pb-4">Loading...</p>
          <ScaleLoader color="#f2f2f2" size={70} />
        </div>
      )}

      {pokemonData && (
        <PokemonDetailsNav pokemonDexNumber={pokemonData.id} />
      )}

      <h1>{pokemonData.name}</h1>
    </Content>
  );
}

const query = `
query getPokemonData($id: Int) {
  pokemon: pokemon_v2_pokemon(where: {is_default: {_eq: true}, id: {_eq: $id}}) {
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

async function fetchGraphQL(id) {
  const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: {
        id: id,
      },
      operationName: "getPokemonData",
    }),
  });

  return await result.json();
}
