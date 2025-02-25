import { BoxPantalla, BoxPregunta } from "./styles";
import PropTypes from 'prop-types';

const Pantalla = ({pregunta, setPregunta,index}) => {

    return (
        <BoxPantalla $index={index} >
            <BoxPregunta>
                <h1>{pregunta.question}</h1>
                <div>
                    {pregunta.answers.map((answer, i) => <p key={i+100}><button onClick={() => setPregunta(answer.isRight ? index+1:0)}>X</button> {answer.txt}</p>)}
                </div>
            </BoxPregunta>
            <img src= {pregunta.img} />
        </BoxPantalla>
    )
}
Pantalla.propTypes = {
    pregunta: PropTypes.object,
    setPregunta: PropTypes.number,
    actual: PropTypes.number,
    index: PropTypes.number,
};

export default Pantalla;