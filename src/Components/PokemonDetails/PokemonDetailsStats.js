import React from "react";

export default function PokemonDetailsStats({ stats }) {
  console.log(stats);
  let statMap = {};
  let total = 0;
  let highestStat = 0;

  stats.map((stat) => {
    total += stat.base_stat;

    if (stat.base_stat > highestStat) {
      highestStat = stat.base_stat;
    }

    return (statMap[stat.stat.name] = {
      stat_value: stat.base_stat,
    });
  });

  console.log(statMap, total, highestStat);

  return (
    <div className="py-2">
      <h3 className="font-bold text-lg">Base Stats</h3>
      <div className="flex flex-col space-y-1 w-full">
        <StatBlock
          stat={statMap["hp"]}
          statName="HP"
          highestStat={highestStat}
        />
        <StatBlock
          stat={statMap["attack"]}
          statName="Attack"
          highestStat={highestStat}
        />
        <StatBlock
          stat={statMap["defense"]}
          statName="Defense"
          highestStat={highestStat}
        />
        <StatBlock
          stat={statMap["special-attack"]}
          statName="Sp. Attack"
          highestStat={highestStat}
        />
        <StatBlock
          stat={statMap["special-defense"]}
          statName="Sp. Defense"
          highestStat={highestStat}
        />
        <StatBlock
          stat={statMap["speed"]}
          statName="Speed"
          highestStat={highestStat}
        />
      </div>
    </div>
  );
}

function StatBlock({ stat, statName, highestStat }) {
  let width = (stat.stat_value / highestStat) * 100;

  let widthStyle = { width: width + "%" };

  return (
    <div className="flex mt-2 border border-gray-500">
      <p
        className="capitalize flex-1 bg-gray-500 text-gray-300 rounded-tl-sm rounded-bl-sm text-center text-sm items-center flex justify-center"
        style={{ flexBasis: "40%" }}>
        {statName}
      </p>
      <div className="bg-gray-300 w-full">
        <div className="bg-gradient-to-r to-blue-400 from-blue-600" style={widthStyle}>
          &nbsp;
        </div>
      </div>
      <p className="bg-gray-500 text-gray-300 px-2 border-l border-gray-500">{stat.stat_value}</p>
    </div>
  );
}
