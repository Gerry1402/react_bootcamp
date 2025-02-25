import React, { useRef } from 'react';

const EurosDolares = () => {
    const euros = useRef()
    const dolares = useRef()
    const calcular = () => {
        dolares.current.textContent = Number(euros.current.value)*2
    }
    return <div>
        <input type='number' ref={euros} min={0} placeholder='0'/>
        <button onClick={calcular}>Calcular</button>
        <p ref={dolares}>0</p>
        </div>
    ;
}

export default EurosDolares;
