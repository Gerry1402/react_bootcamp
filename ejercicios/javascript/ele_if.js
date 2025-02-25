/* Ejercicio 1 */
if (10 == 10){
    console.log('You got a true!')
}
else{
    console.log('You got a false!')
}

/* Ejercicio 2 */
const nota = 10;
if (nota == 5){
    console.log('Aprobado por los pelos')
}
if(nota > 5){
    console.log('Aprobado')
}
else{
    console.log('Suspenso')
}

/* Ejercicio 3 */
const n = 10;
if(n >= 0){
    console.log(n +" es positvo");
}else {
    console.log(n + ' es negativo');
}

if(n%2 == 0){
    console.log(n +' es par');
}else {
    console.log(n + ' es impar');
}

/* Ejercicio 4 */

function contarDecimales(num) {
    if (!isFinite(num)) return 0; // Maneja Infinity y NaN
    let str = num.toString();
    if (str.includes('.')) {
        return str.split('.')[1].length;
    }
    return 0; // Si no tiene decimales, devuelve 0
}
{
    const n1 = 0.1;
    const n2 = 0.00002;
    const op = '-';
    let resultado;
    if(op == '+'){
        let maxDecimals = Math.max(contarDecimales(n1), contarDecimales(n2));    
        resultado = (n1*10**maxDecimals + n2*10**maxDecimals)/(10**maxDecimals);
    }
    if(op == '-'){
        let maxDecimals = Math.max(contarDecimales(n1), contarDecimales(n2));    
        resultado = (n1*10**maxDecimals - n2*10**maxDecimals)/(10**maxDecimals);
    }
    if(op == '*'){
        resultado = n1 * n2;
    }
    if(op == '/'){
        resultado = n1 / n2;
    }
    console.log(resultado);
}