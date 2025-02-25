import { useState } from "react";
import Popup from "./Popup";

const App = () => {

    let [visible, setVisible] = useState(false)

    return (
    <div>
        <button onClick={() => setVisible(!visible)}>Cambiar</button>
        <Popup visible={visible} setVisible={setVisible} title={'Hola'} text={'Que tal??'} />
    </div>
    )
}

export default App;