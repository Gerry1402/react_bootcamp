import { useState } from "react";
import Botones from "./botones";
import Frases from "./frases";

const App = () => {

    let [position, setPosition] = useState(0)

    return (
    <div>
        <Botones position = {position} setPosition={setPosition}/>
        <Frases position = {position} />
    </div>
    )
}

export default App;