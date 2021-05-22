import React from "react";
import { Link } from "react-router-dom";

import PokemonSprite from "../Pokemon/PokemonSprite";

import RequirementLevelUp from "./RequirementComponents/RequirementLevelUp";
import RequirementNone from "./RequirementComponents/RequirementNone";
import RequirementUseItem from "./RequirementComponents/RequirementUseItem";

const requirementComponents = {
  None: RequirementNone,
  LevelUp: RequirementLevelUp,
  UseItem: RequirementUseItem,
};

export default function PokemonDetailsEvolution({ evolutionData }) {
  // Parse the evolutions
  let pokemon = evolutionData.pokemon.sort((a, b) => a.order - b.order);

  return (
    <div className="py-1">
      <h3 className="font-bold text-lg">Evolution</h3>
      <div className="flex space-x-10">
        {pokemon.map((data) => {
          return <EvolutionCard evoData={data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

function EvolutionCard({ evoData }) {
  console.log(evoData);
  const evoRequirement = evoData.evolution_requirement[0];

  let RequirementTag = requirementComponents["None"];

  let classes = 'flex flex-col items-center p-3 rounded space-y-2 bg-gray-500 ';

  if (evoRequirement) {
    const triggerName = evoRequirement.trigger.name[0].name;

    const requirement = triggerName
      .replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      })
      .replace(" ", "");

    RequirementTag = requirementComponents[requirement];
  } else {
    classes += 'border border-gray-200';
  }

  return (
    <div className={classes}>
      <Link to={`/pokemon/${evoData.id}`} className="space-y-1">
        <p className="text-gray-300 text-center capitalize">{evoData.name}</p>

        <PokemonSprite pokemonData={{ name: evoData.name, id: evoData.id }} />
      </Link>

      <RequirementTag data={evoData} />
    </div>
  );
}
