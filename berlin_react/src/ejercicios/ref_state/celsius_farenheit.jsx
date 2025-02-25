import React from 'react';
import {useRef} from 'react';

const CelsiusFarenheit = () => {
    const celsius = useRef()
    const farenheit = useRef()
    const calcular = () => {
        farenheit.current.textContent = Number(celsius.current.value)*9/5 + 32
    }
    return <div>
        <input type='number' ref={celsius} min={0} placeholder='0'/>
        <button onClick={calcular}>Calcular</button>
        <p ref={farenheit}>32</p>
        </div>
    ;
}

export default CelsiusFarenheit;
