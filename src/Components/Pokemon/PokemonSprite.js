import React from 'react'

export default function PokemonSprite({ pokemonData }) {
    const isLocal = process.env.REACT_APP_ENVIRONMENT === 'local';
    return (
        <img
            className="bg-gray-300 rounded-full flex items-center justify-center"
            style={{width: "75px", height: "75px"}}
            src={isLocal ? '' : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
            alt={`${pokemonData.name} sprite`}
          />
    )
}
