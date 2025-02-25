import React from 'react';
import {useRef} from 'react';

const UseRef = () => {
    const nombreRef = useRef();
    const resultadoRef = useRef();

    const procesar = () => resultadoRef.current.textContent = nombreRef.current.value;


    return <div>
        <input type="text" ref={nombreRef} />
        <button onClick={procesar}>Enviar</button>
        <div ref={resultadoRef}></div>
    </div>
}

export default UseRef;
