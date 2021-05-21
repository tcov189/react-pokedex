import React from "react";
import { Link } from "react-router-dom";

import PokemonSprite from "../Pokemon/PokemonSprite";

import RequirementLevelUp from './RequirementComponents/RequirementLevelUp';

const requirementComponents = {
  'LevelUp': RequirementLevelUp,
};

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

  const evoRequirement = evoData.evolution_requirement[0];
  const triggerName = evoRequirement.trigger.name[0].name;

  const requirement = triggerName.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();}).replace(' ', '');

  let RequirementTag = requirementComponents[requirement];

  return (
    <div className="flex flex-col items-center p-3 rounded bg-gray-500 space-y-2">
      <Link to="/pokemon/8" className="space-y-1">
        <p className="text-gray-300 text-center capitalize">{evoData.name}</p>

        <PokemonSprite pokemonData={{ name: evoData.name, id: evoData.id }} />
      </Link>
      <RequirementTag data={evoRequirement} />
    </div>
  );
}

