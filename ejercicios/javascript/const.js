/* Ejercicio 1 */
const txt1 = 'Este es el principi';
const txt2 = 'Este es el final';
const txt3 = `${txt1} ${txt2}`;

/* Ejercicio 2 */
const euros = 7
const dolares = euros*2;
console.log(dolares);


/* Ejercicio 3 */
const precio = 100;
const precioConIva = precio * 1.21;
console.log(precioConIva); // Debería mostrar 121

/* Ejercicio 4 */
const ancho = 10;
const alto = 100;
const area = ancho * alto;
console.log(area);

/* Ejercicio 5 */
const centigrados = 20;
const fahrenheit = centigrados * 1.8 + 32;
console.log(fahrenheit); // Debería mostrar 68

/* Ejercicio 6 */
const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';

console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`);