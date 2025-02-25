import Inputs from "./inputs";
import { useState } from "react";

const App = () => {
    let [resultado, setResultado] = useState(0);
    return (
        <div>
            <Inputs value={resultado} actualizar={setResultado} />
            <p>{resultado}</p>
        </div>
    );
};

export default App;
