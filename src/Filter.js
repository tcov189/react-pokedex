import PropTypes from 'prop-types'

export default function Filter({filter, onChangeHandler, placeHolder}) {
    return (
        <div>
            <input
                className="px-1"
                placeholder={placeHolder || null}
                onChange={onChangeHandler}
                value={filter} />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
};