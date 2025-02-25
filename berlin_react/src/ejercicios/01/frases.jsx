import { BoxFrases } from "./styles";
import frases from '../../../data/frases.json'
import PropTypes from 'prop-types';

const Frases = ({position}) => {

    console.log(position);
    const pos = position<0 ? position%frases.length+frases.length : position%frases.length+1

    return (
        <BoxFrases $position={pos}>
            {frases.map((frase, i) => <p key={i}>{frase}</p>)}
        </BoxFrases>
    )
}
Frases.propTypes = {
    position: PropTypes.number,
};

export default Frases;