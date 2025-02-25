import { useState } from "react";
import preguntas from './assets/data/questions.js'
import Pantalla from "./pregunta.jsx";
import Popup from "./Popup.jsx";

const App = () => {

    let [pregunta, setPreguntaa] = useState(0)
    let [ganador, setGanador] = useState(false)

    const setPregunta = (pregunta) => {
        if (pregunta == preguntas.length){
            setGanador(true)
        }
        else{
            setPreguntaa(pregunta)
            setGanador(false)
        }
    }

    return (
    <div>
        <Pantalla pregunta={preguntas[pregunta]} index={pregunta} setPregunta={setPregunta}/>
        <Popup visible={ganador} setPregunta={setPregunta} title='Has Ganado!' text='Para volver a jugar cierra este mensaje o recarga la pagina'/>
    </div>
    )
}

export default App;