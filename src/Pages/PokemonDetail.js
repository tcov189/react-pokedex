import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "../Layout/Content";
import ScaleLoader from "react-spinners/ScaleLoader";

import PokemonDetailsNav from "../Components/PokemonDetails/PokemonDetailsNav";
import PokemonDetailsHeader from "../Components/PokemonDetails/PokemonDetailsHeader";
import PokemonDetailsAbilities from "../Components/PokemonDetails/PokemonDetailsAbilities";
import PokemonDetailsStats from "../Components/PokemonDetails/PokemonDetailsStats";
import PokemonDetailsEvolution from "../Components/PokemonDetails/PokemonDetailsEvolution";
import PokemonDetailsErrorBoundary from "../Components/PokemonDetails/PokemonDetailsErrorBoundary";

export default function PokemonDetail() {
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState(null);

  const getPokemonData = async (id) => {
    try {
      let pokemonData = {};

      if (localStorage.getItem(`pokemon_${id}`)) {
        pokemonData = JSON.parse(localStorage.getItem(`pokemon_${id}`));
      } else {
        const res = await fetchGraphQL(parseInt(id));
        pokemonData = res.data.pokemon[0];

        localStorage.setItem(`pokemon_${id}`, JSON.stringify(pokemonData));
      }

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
        <div>
            <PokemonDetailsNav pokemonDexNumber={pokemonData.id} />

            <PokemonDetailsErrorBoundary>
              <PokemonDetailsHeader pokemonData={pokemonData} />
            </PokemonDetailsErrorBoundary>

            <PokemonDetailsErrorBoundary>
              <PokemonDetailsAbilities abilities={pokemonData.abilities} />
            </PokemonDetailsErrorBoundary>

            <PokemonDetailsErrorBoundary>
              <PokemonDetailsStats stats={pokemonData.stats} />
            </PokemonDetailsErrorBoundary>

          <PokemonDetailsErrorBoundary>
            <PokemonDetailsEvolution
              evolutionData={pokemonData.additional_info.evo_chain}
            />
          </PokemonDetailsErrorBoundary>
        </div>
      )}
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
    abilities: pokemon_v2_pokemonabilities(where: {pokemon_v2_ability: {is_main_series: {_eq: true}, generation_id: {}}}) {
      is_hidden
      ability: pokemon_v2_ability {
        name
        is_main_series
        pokemon_v2_abilitynames(where: {language_id: {_eq: 2}}) {
          name
        }
      }
      slot
    }
    stats: pokemon_v2_pokemonstats {
      base_stat
      stat: pokemon_v2_stat {
        name
      }
    }
    additional_info: pokemon_v2_pokemonspecy {
      evo_chain: pokemon_v2_evolutionchain {
        pokemon: pokemon_v2_pokemonspecies {
          id
          is_baby
          evolves_from_species_id
          order
          name
          evolution_requirement: pokemon_v2_pokemonevolutions {
            min_level
            min_affection
            min_beauty
            min_happiness
            needs_overworld_rain
            evolved_species_id
            relative_physical_stats
            time_of_day
            trade_species_id
            turn_upside_down
            party_species_id
            party_type_id
            evolution_trigger_id
            trigger: pokemon_v2_evolutiontrigger {
              name
            }
            item: pokemon_v2_item {
              name
            }
            held_item: pokemonV2ItemByHeldItemId {
              name
            }
            gender: pokemon_v2_gender {
              name
            }
            location: pokemon_v2_location {
              name
            }
            move: pokemon_v2_move {
              name
            }
          }
        }
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
