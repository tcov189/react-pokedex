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

  let pokemonEvos = {};

  pokemon.forEach((pokemonObj) => {
    let id = pokemonObj.evolves_from_species_id || 0;

    if (!pokemonEvos[id]) {
      pokemonEvos[id] = {};
    }

    pokemonEvos[id][pokemonObj.id] = pokemonObj;
  });

  console.log();

  return (
    <div className="py-1">
      <h3 className="font-bold text-lg">Evolution</h3>
      <div className="flex space-x-8 flex-wrap">
        {Object.values(pokemonEvos).map((data) => {
          return (
            <div className="flex flex-col space-y-1">
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

  let classes = "flex flex-col items-center p-3 rounded space-y-2 bg-gray-500 ";

  if (evoRequirement) {
    const triggerName = evoRequirement.trigger.name[0].name;

    const requirement = triggerName
      .replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      })
      .replace(" ", "");

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
