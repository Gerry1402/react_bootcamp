import Inputs from "./inputs";
import Resultado from "./resultado";
import {useState} from 'react';

const App = () => {
  let [resultado, setResultado] = useState(0)
  const operacion = (valor) => {
    setResultado(valor)
  }

  return <div>
    <Inputs operacion = {operacion} />
    <Resultado resultado = {resultado} />
  </div>

}

export default App;