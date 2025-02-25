import React, { useState } from 'react';

const UseState = () => {
    let [contador, setContador] = useState(0)
    const incrementarContador = () => setContador(++contador)
    return <div>
        {contador}<button onClick={incrementarContador}>Incrementar</button>
        </div>
    ;
}

export default UseState;
