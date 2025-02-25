import { BoxPantalla, BoxTitle, BoxImagenes } from "./styles";
import PropTypes from 'prop-types';

const Pantalla = ({workout, setWorkout, index, imagen, setImagen}) => {

    return (
        <BoxPantalla $index={index} >
            <BoxTitle>
                <button onClick={() => setWorkout(index-1)}>-</button>
                <h1>{workout.title}</h1>
                <button onClick={() => setWorkout(index+1)}>+</button>
            </BoxTitle>
            <BoxImagenes imagen={imagen} >
                <img src={workout.exercises[imagen].img} />
                {workout.exercises.map((exercise, i) => <div id={i} key={i+100} onClick={() => setImagen(i)} ><img src={exercise.img}/></div>)}
            </BoxImagenes>
        </BoxPantalla>
    )
}
Pantalla.propTypes = {
    workout: PropTypes.object,
    setWorkout: PropTypes.number,
    index: PropTypes.number,
    imagen: PropTypes.number,
    setImagen: PropTypes.number,
};

export default Pantalla;