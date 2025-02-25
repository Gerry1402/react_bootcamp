const nombres = ['Juan', 'Maria', 'Miguel', 'Lucia', 'Pablo'];
const numeros1 = [2, 3, 4, 7]
const numeros2 = [1,9,3,8,5,7,7]
console.log(numeros2);

for (const nombre of nombres) {
    console.log(`Conozco a alguien llamado ${nombre}`);
}

const toArray = (param1, param2) => [param1, param2]
console.log(toArray(1, 'Gerard'));

for (const numero of numeros2) {
    console.log(numero*2);
}

const getFirstElement = array => array[0]
console.log(getFirstElement(numeros1));

const setFirstElement = (array, first) => {
    array[0] = first
    return array
}
console.log(setFirstElement(numeros2,6));

const getLastElement = array => array.reverse()[0]
console.log(getLastElement(numeros1 ));

const harcodeados = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos = [];
let negativos = [];
let zeros = [];
for (const numero of harcodeados) {
    if (numero > 0){
        positivos.push(numero)
    }
    else if (numero < 0){
        negativos.push(numero)
    }
    else{
        zeros.push(numero)
    }
}
console.log(`Cantidad de positivos: ${positivos.length}`);
console.log(`Cantidad de negativos: ${negativos.length}`);
console.log(`Cantidad de zeros: ${zeros.length}`);

let total_positivos = 0;
for (const numero of positivos) {
    total_positivos += numero
}
let total_negativos = 0;
for (const numero of negativos) {
    total_negativos += numero
}

console.log(`Media de positivos: ${total_positivos/positivos.length}`);
console.log(`Media de negativos: ${total_negativos/negativos.length}`);

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
    ];

const myData = arr[2][1]
console.log(myData);

