import PropTypes from 'prop-types'

export default function Filter({filter, setFilter, placeHolder}) {
    return (
        <div>
            <input
                className="px-1"
                placeholder={placeHolder || null}
                onChange={(e) => setFilter(e.target.value)}
                value={filter} />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
};