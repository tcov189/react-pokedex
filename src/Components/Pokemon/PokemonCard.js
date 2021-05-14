import PropTypes from 'prop-types'
import TypeLabel from './TypeLabel'

export default function PokemonCard({ pokemon }) {
    return (
        <div className="flex items-center bg-gray-100 my-2 py-3 px-2 rounded-sm border border-gray-500">
            <div className="flex mr-1 w-1/2 items-center">
                <div className="mr-2">ICON</div>
                <p className="mr-1 text-sm">
                    #{pokemon.dex_number}
                </p>
                <p>{pokemon.name}</p>
            </div>

            <div className="flex flex-1 justify-between items-center">
                <div className="flex flex-1 justify-between">
                    <TypeLabel type={pokemon.types.primary} />
                    {pokemon.types.secondary &&
                        <TypeLabel type={pokemon.types.secondary} />
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
        dex_number: PropTypes.string.isRequired,
        types: PropTypes.shape({
            primary: PropTypes.string.isRequired,
            secondary: PropTypes.string
        }),
    })
}