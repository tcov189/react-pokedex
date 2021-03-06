import PropTypes from "prop-types";
import TypeLabel from "./TypeLabel";
import { Link } from "react-router-dom";
export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="flex items-center bg-gray-100 my-2 py-3 px-2 rounded-sm border border-gray-500">
        <div className="flex mr-1 w-1/2 items-center">
          <p className="mr-1">#{pokemon.id.toString().padStart(3, "0")}</p>
          <p className="capitalize">{pokemon.name}</p>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="flex space-x-4">
            <TypeLabel type={pokemon.primary_type.type.name} />
            {pokemon.secondary_type && (
              <TypeLabel type={pokemon.secondary_type.type.name} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
  }).isRequired,
};
