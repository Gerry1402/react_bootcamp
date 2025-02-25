import React from 'react';
import {useRef} from 'react';

const SuperficieRectanglo = () => {
    const alto = useRef()
    const ancho = useRef()
    const resultado = useRef()
    const calcular = () => resultado.current.textContent = Number(alto.current.value)*Number(ancho.current.value)
    return <div>
        Alto:<input type='number' ref={alto} min="0" placeholder='0'/>
        Ancho:<input type='number' ref={ancho} min="0" placeholder='0'/>
        <button onClick={calcular}>Calcular</button>
        <p ref={resultado}>0</p>
        </div>
    ;
}

export default SuperficieRectanglo;
