import React, { useRef } from 'react';

const Inputs = ({ operacion }) => {
    const input1 = useRef()
    const input2 = useRef()
    return (
        <div>
            <input ref={input1} type='number'/>
            <input ref={input2} type='number'/>
            <button onClick={() => operacion(Number(input1.current.value) + Number(input2.current.value))} >Calcular</button>
        </div>
    );
}

export default Inputs;
