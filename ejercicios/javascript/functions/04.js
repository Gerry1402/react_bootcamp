const length = string => string.length
const devuelvePrimeraLetra = string => string[0]
const devuelveUltimaLetra = string => string.slice(-1)
const devuelveEnesimaLetra = (string, numero) => string.slice(numero-1, numero)
console.log('Wonderful day'.substring(3,7))
const toCase = string => `${string.toLowerCase()}-${string.toUpperCase()}`
const shortcut = (string1, string2) => `${string1[0]}-${string2[0]}`
const fisrtChar = string => string.trim()[0]
const devuelveMasLarga = (string1, string2) => {
    if (string1.length > string2.length || string1.length == string2.length){
        return string1
    }
    else{
        return string2
    }
}
const devuelveMasLarga2 = (string1, string2, string3) => {
    if (string1.length > string2.length && string1.length > string3.length){
        return string1
    }
    else if (string2.length > string1.length && string2.length > string3.length){
        return string2
    }
    else if (string3.length > string1.length && string3.length > string2.length){
        return string3
    }
    else{
        return 'No hay una única cadena más larga'
    }
}
const generarNombre = (string1, string2, string3) => {
    if (string1.length < 5 || string2.length < 5 || string3.length < 5){
        return 'error'
    }
    else{
        return `${string1.slice(0,3)}${string2.slice(0,3)}${string3.slice(0,3)}`
    }
}
const generarNombre2 = (string1, string2, string3) => {
    if (string1.length < 5 || string2.length < 5 || string3.length < 5){
        return 'error'
    }
    else{
        return `${string1.slice(-1)}${string2.slice(-1)}${string3.slice(-1)}`
    }
}
const generarNombre3 = (string1, string2, string3) => {
    if (string1.length < 5 || string2.length < 5 || string3.length < 5){
        return 'error'
    }
    else{
        return `${string1.slice(-3)}${string2.slice(-3)}${string3.slice(-3)}`
    }
}
const tieneLetra = (string, letra) => string.toLowerCase().includes(letra.toLowerCase())
const crearPalabra = (string, numero) => string.toUpperCase().repeat(numero)
const addGuiones = (string) => {
    let resultado = string[0]
    for (let i=1; i<string.length; i++){
        resultado += `-${string[i]}`
    }
    return resultado
}
const contadorDeLetras = (string, letra) => {
    let contador = 0
    for (let i=0; i<string.length; i++){
        if (string[i].toLowerCase() == letra.toLowerCase()){
            contador ++
        }
    }
    return contador
}
const contadorDeLetras2 = (string1, string2, letra) => {
    let contador1 = 0
    for (let i=0; i<string1.length; i++){
        if (string[i].toLowerCase() == letra.toLowerCase()){
            contador1 ++
        }
    }
    let contador2 = 0
    for (let i=0; i<string2.length; i++){
        if (string[i].toLowerCase() == letra.toLowerCase()){
            contador2 ++
        }
    }
    if (contador2 > contador1){
        return string2
    }
    else{
        return string1
    }
}
const indexOfIgnoreCase = (string, letras) =>{
    for (let i=0; i<string.length-letras.length; i++){
        if (string.slice(i,i+letras.length).toLowerCase() == letras.toLowerCase()){
            return i
        }
    }
    return -1
}
const firstWord = (string) => string.trim().split(' ')[0]

const firstWord2 = string =>{
    let stringProcesado = string.trim()
    let palabra =''
    for (let i=0; i<stringProcesado.length; i++){
        if (stringProcesado[i] == ' '){
            return palabra
        }
        else{
            palabra += stringProcesado[i]
        }
    }
}


console.log(firstWord2('   Gerard Vello'))
