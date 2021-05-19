import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function PokemonDetailsNav({ pokemonDexNumber }) {
  const previousDexNumber = pokemonDexNumber - 1 || null;
  const nextDexNumber =
    pokemonDexNumber + 1 < 898 ? pokemonDexNumber + 1 : null;
  return (
    <nav id="pokemon-details-nav" className="flex justify-between align-middle">
      <div>
        {previousDexNumber && (
          <Link to={`/pokemon/${previousDexNumber}`}>
            &lt; #{previousDexNumber.toString().padStart(3, "0")}
          </Link>
        )}
      </div>

      <div>
        {nextDexNumber && (
          <Link to={`/pokemon/${nextDexNumber}`}>
            #{nextDexNumber.toString().padStart(3, "0")} &gt;
          </Link>
        )}
      </div>
    </nav>
  );
}

PokemonDetailsNav.propTypes = {
  pokemonDexNumber: PropTypes.number.isRequired,
};
