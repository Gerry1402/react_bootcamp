import { useState } from "react";
import workouts from './assets/data/workouts.js'
import Pantalla from "./Pantalla.jsx";

const App = () => {

    const [workout, setWorkoutt] = useState(0)
    const [imagen, setImagen] = useState(0);

    const setWorkout = (workout) => setWorkoutt(workout%workouts.length)

    return (
    <div>
        <Pantalla workout={workouts.at(workout)} index={workout} setWorkout={setWorkout} imagen={imagen} setImagen={setImagen}/>
    </div>
    )
}

export default App;