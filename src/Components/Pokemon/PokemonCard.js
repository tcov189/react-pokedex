import PropTypes from 'prop-types'
import TypeLabel from './TypeLabel'

export default function PokemonCard({ pokemon }) {
    const primaryType = pokemon.types.filter((type) => type.slot === 1 )[0];
    const secondaryType = pokemon.types.filter((type) => type.slot !== 1 )[0];

    return (
        <div className="flex items-center bg-gray-100 my-2 py-3 px-2 rounded-sm border border-gray-500">
            <div className="flex mr-1 w-1/2 items-center">
                <div className="mr-2">ICON</div>
                <p className="mr-1 text-sm">
                    #{pokemon.id}
                </p>
                <p className="capitalize">{pokemon.name}</p>
            </div>

            <div className="flex flex-1 justify-between items-center">
                <div className="flex flex-1 justify-between">
                    <TypeLabel type={primaryType.type.name} />
                    {secondaryType &&
                        <TypeLabel type={secondaryType.type.name} />
                    }
                </div>

                <div className="ml-2">ICON</div>
            </div>
        </div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        types: PropTypes.array.isRequired,
    })
}