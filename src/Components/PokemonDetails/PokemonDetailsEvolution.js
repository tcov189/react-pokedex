import React from "react";
import { Link } from "react-router-dom";

import PokemonSprite from "../Pokemon/PokemonSprite";

export default function PokemonDetailsEvolution({ evolutionData }) {
  // Parse the evolutions
  let pokemon = evolutionData.pokemon.sort((a, b) => a.id - b.id);

  return (
    <div className="py-1">
      <h3 className="font-bold text-lg">Evolution</h3>
      <div className="flex space-x-10">
        {
          pokemon.map((data) => {
            return <EvolutionCard evoData={data} key={data.id} />
          })
        }
      </div>
    </div>
  );
}

function EvolutionCard({ evoData }) {
  console.log(evoData);

  return (
    <div className="flex flex-col items-center p-3 rounded bg-gray-500 space-y-2">
      <Link to="/pokemon/8" className="space-y-1">
        <p className="text-gray-300 text-center capitalize">{evoData.name}</p>

        <PokemonSprite pokemonData={{ name: evoData.name, id: evoData.id }} />
      </Link>
      <div className="flex flex-col items-center text-gray-300">
        <p>{evoData.evolution_requirement[0].trigger.name[0].name}</p>
        <p>{evoData.evolution_requirement[0].min_level}</p>
      </div>
    </div>
  );
}
