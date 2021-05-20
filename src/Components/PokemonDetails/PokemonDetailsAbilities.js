import React from "react";

export default function PokemonDetailsAbilities({ abilities }) {
  //Sort the abilities
  let pokeAbilities = {};

  abilities.forEach((ability) => {
    pokeAbilities[ability.slot] = {
      name: ability.ability.name.replace("-", " "),
      is_hidden: ability.is_hidden,
    };
  });

  return (
    <div className="pt-2">
      <h3 className="font-bold text-lg">Abilities</h3>
      <div className="flex justify-between pt-1">
        <AbilityBlock ability={pokeAbilities[1]} />
        <AbilityBlock ability={pokeAbilities[2]} />
        <AbilityBlock ability={pokeAbilities[3]} />
      </div>
    </div>
  );
}

function AbilityBlock({ ability }) {
  if (!ability) {
    return null;
  }

  let classes = "capitalize py-2 px-3 ";

  if (ability.is_hidden) {
    classes += "bg-gray-200 text-gray-500";
  } else {
    classes += "bg-gray-500 text-gray-300";
  }

  return <div>{ability && <p className={classes}>{ability.name}</p>}</div>;
}
