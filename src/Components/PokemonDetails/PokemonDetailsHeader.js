import React from "react";
import TypeLabel from "../Pokemon/TypeLabel";

export default function PokemonDetailsHeader({ pokemonData }) {
  const primaryType = pokemonData.types.filter((type) => type.slot === 1)[0];
  const secondaryType = pokemonData.types.filter((type) => type.slot !== 1)[0];

  pokemonData.primary_type = primaryType;
  pokemonData.secondary_type = secondaryType;

  return (
    <header className="pt-2 flex justify-between">
      <div id="pdh-left" className="flex-1">
          <h1 className="font-bold capitalize text-xl">
            {pokemonData.name} #{pokemonData.id.toString().padStart(3, "0")}
          </h1>
          <div className="flex space-x-1 pt-2">
            <TypeLabel type={pokemonData.primary_type.type.name} />
            {pokemonData.secondary_type && (
              <TypeLabel type={pokemonData.secondary_type.type.name} />
            )}
          </div>
      </div>
      <div className="flex-1 flex justify-around items-center">
          <div className="bg-gray-300 rounded-full flex items-center justify-center" style={{width: "75px", height: "75px"}}>
              Sprite
          </div>

          <div className="bg-gray-300 rounded-full flex items-center justify-center" style={{width: "50px", height: "50px"}}>
              caught
          </div>
      </div>
    </header>
  );
}
