import { BoxBotones } from "./styles";
import PropTypes from 'prop-types';

const Botones = ({position, setPosition}) => {

    return (
        <BoxBotones>
            <button onClick={() => setPosition(position-1)}>Anterior</button>
            <button onClick={() => setPosition(position+1)}>Siguiente</button>
        </BoxBotones>
    )
}
Botones.propTypes = {
    position: PropTypes.number,
    setPosition: PropTypes.number,
};

export default Botones;