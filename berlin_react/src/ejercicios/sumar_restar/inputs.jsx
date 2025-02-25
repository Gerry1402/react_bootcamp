import PropTypes from 'prop-types';

const Inputs = ({ value, actualizar }) => {
    return (
        <div>
            <button onClick={() => actualizar(value - 1)} >-</button>
            <input  type='number' value={value} onChange={(e) => actualizar(+e.target.value)}/>
            <button onClick={() => actualizar(value + 1)} >+</button>
        </div>
    );
}

Inputs.propTypes = {
    value: PropTypes.number,
    actualizar: PropTypes.number,
};
export default Inputs
