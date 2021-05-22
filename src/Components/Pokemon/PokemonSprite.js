import React from 'react'

export default function PokemonSprite({ pokemonData, width = '75px', height = '75px' }) {
    return (
        <img
            className="bg-gray-300 rounded-full flex items-center justify-center"
            style={{width: width, height: height}}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
            alt={`${pokemonData.name} sprite`}
          />
    )
}
