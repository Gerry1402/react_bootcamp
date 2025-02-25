/* Ejercicio 1 */
/* for (let i = 0; i < 100; i += 2) {
    console.log(i); // 0 1 2
} */

/* Ejercicio 2 */
/* for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i); // 0 1 2
    }
} */

/* Ejercicio 3 */
for (let i = 1; i < 20; i++) {
    let n = i
    if (i % 3 === 0) {
        n = 'Fizz'; // 0 1 2
    }
    if (i % 5 === 0) {
        n += 'Buzz'; // 0 1 2
    }
    if (i % 3 === 0 && i % 5 === 0) {
        n = 'FizzBuzz'; // 0 1 2
    }
    console.log(n);
}

/* Ejercicio 4 */
/* let acumulador = 0;
for (let i=5; i>0; i--){
    acumulador += i;
}
console.log(acumulador); */

/* Ejercicio 4 */
/* for (let i=1; i<10; i++){
    console.log(`7 x ${i} = ${i*7}`);
} */

/* Ejercicio 5 */
for (let i=1; i<10; i++){
    for (let j=1; j<10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}