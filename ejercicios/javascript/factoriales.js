const n = 171;

const factorial = numero =>{
    let resultado = 1;
    for (let index = 2; index <= numero; index++) {
        resultado *= index;
    }
    return resultado
}
console.log(factorial(n));