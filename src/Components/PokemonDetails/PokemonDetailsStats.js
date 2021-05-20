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

    return (statMap[stat.stat.name] = stat.base_stat);
  });

  console.log(statMap, total, highestStat);

  return (
    <div className="pt-3">
      <h3 className="font-bold text-lg">Stats</h3>
      HP <input type="range" min="0" value={statMap['hp']} max={highestStat} disabled /> {statMap['hp']}
    </div>
  );
}
