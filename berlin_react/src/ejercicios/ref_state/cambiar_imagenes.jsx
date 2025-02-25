import React, { useRef, useState } from 'react';
const ANIMAL_IMAGES = {
    img1: "https://pablomonteserin.com/lorempixel/111x111",
    img2: "https://pablomonteserin.com/lorempixel/222x222",
    img3: "https://pablomonteserin.com/lorempixel/333x333",
    img4: "https://pablomonteserin.com/lorempixel/444x444",
};

const CambiarImagenes = () => {
    let [imagen, nuevaImagen] = useState("https://pablomonteserin.com/lorempixel/111x111")
    const cambiarImagen = (srcImagen) => nuevaImagen(srcImagen)
    return (
        <div>
            {Object.entries(ANIMAL_IMAGES).map(([key, value], i) => <button key={i} onClick={()=>cambiarImagen(value)}>{key}</button>)}
            <img src={imagen}/>
        </div>
    );
}

export default CambiarImagenes;
