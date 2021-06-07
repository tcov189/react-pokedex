import React from "react";
import { Link } from "react-router-dom";

import PokemonSprite from "../Pokemon/PokemonSprite";

import RequirementLevelUp from "./RequirementComponents/RequirementLevelUp";
import RequirementNone from "./RequirementComponents/RequirementNone";
import RequirementUseItem from "./RequirementComponents/RequirementUseItem";
import RequirementTrade from "./RequirementComponents/RequirementTrade";

const requirementComponents = {
  None: RequirementNone,
  LevelUp: RequirementLevelUp,
  UseItem: RequirementUseItem,
  Trade: RequirementTrade,
  Other: RequirementNone
};

export default function PokemonDetailsEvolution({ evolutionData }) {
  // Parse the evolutions
  let pokemon = evolutionData.pokemon.sort((a, b) => a.order - b.order);

  let evolutionStages = {};

  pokemon.forEach((pokemonObj) => {
    if (!evolutionStages[pokemonObj.order]) {
      evolutionStages[pokemonObj.order] = {};
    }

    evolutionStages[pokemonObj.order][pokemonObj.id] = pokemonObj;
  });

  return (
    <div className="py-1">
      <h3 className="font-bold text-lg">Evolution</h3>
      <div className="flex flex-wrap justify-between">
        {Object.values(evolutionStages).map((data, index) => {
          return (
            <div key={`evo_${index}`} className="flex flex-col mb-1" style={{flexBasis: '30%'}}>
              {Object.values(data).map((evoData) => {
                return <EvolutionCard evoData={evoData} key={evoData.id} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EvolutionCard({ evoData }) {
  const evoRequirement = evoData.evolution_requirement[0];

  let RequirementTag = requirementComponents["None"];

  let classes = "flex flex-col items-center p-3 rounded bg-gray-500 ";

  console.log(evoData);

  if (evoRequirement) {
    const triggerName = evoRequirement.trigger.name;

    const requirement = triggerName
      .replace(/[-]+/g, ' ')
      .split(' ')
      .reduce((carry, elem) => {
        return carry + (elem.charAt(0).toUpperCase() + elem.substring(1))}, '');

    RequirementTag = requirementComponents[requirement];
  } else {
    classes += "border border-gray-200";
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
