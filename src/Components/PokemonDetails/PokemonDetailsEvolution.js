import React from "react";
import { Link } from 'react-router-dom';

import PokemonSprite from "../Pokemon/PokemonSprite";

export default function PokemonDetailsEvolution({ evolutionData }) {
  // Parse the evolutions

  return (
    <div className="py-1">
      <h3 className="font-bold text-lg">Evolution</h3>
      <div className="flex">
        <div className="flex flex-col items-center p-3 rounded bg-gray-500 space-y-2">
          <Link to="/pokemon/8" className="space-y-1">
            <p className="text-gray-300">Wartortle</p>

            <PokemonSprite pokemonData={{name: 'wartortle', id: 8}} />

          </Link>
          <div className="flex flex-col items-center text-gray-300">
            <p>Level Up</p>
            <p>16</p>
          </div>
        </div>
      </div>
    </div>
  );
}
