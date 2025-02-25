const palabras = [
    "casa", 
    "perro", 
    "python", 
    "programacion", 
    "tecnologia", 
    "datos", 
    "inteligencia", 
    "artificial", 
    "ciencia", 
    "computacion",
    "almohada",
    "elefante",
    "espejo",
    "universo",
    "paraguas",
    "guitarra",
    "aventura",
    "telescopio",
    "piano",
    "jirafa",
    "ocelote",
    "hamburguesa",
    "ciruela",
    "exoplaneta",
    "radioactividad",
    "constelacion",
    "montaña",
    "barbacoa",
    "efervescente"
]

const palabra = palabras[Math.floor(Math.random()*palabras.length)].split('');
let adivinado = palabra.map(letra => '_');
let contador = 6;
let bloqueado = false;
const inicio = 2.45;
const final = 97;
const numElementos = 7;
const step = (final - inicio) / (numElementos - 1);  // Calcular el paso
let posicionesBackground = [];
for (let i = 0; i < numElementos-1; i++) {
    posicionesBackground.push(inicio + (i * step));  // Calcular el valor de cada elemento
}
console.log(posicionesBackground);
console.log(palabra.join(''));
document.querySelector('#palabra').textContent = adivinado.join(' ');

const enviar = () => {
    const inputLetra = document.querySelector('#letraEnviar');
    const letraEnviada = inputLetra.value.trim() != '' ? inputLetra.value.trim().toLowerCase():false;
    if (letraEnviada && !bloqueado){
        if (palabra.includes(letraEnviada)){
            adivinado = adivinado.map((letra, i) => letraEnviada == palabra[i] ? letraEnviada: letra)
        }
        else{
            console.log(contador);
            console.log(posicionesBackground);
            console.log(posicionesBackground[contador]);
            document.querySelector('#ahorcado').style.backgroundPosition = `${posicionesBackground[--contador]}%`
        }
        document.querySelector('#palabra').textContent = adivinado.join(' ');
        if (!adivinado.includes('_') || contador == 1){
            bloqueado = true
        }
    }
}