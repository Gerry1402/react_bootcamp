const nombres = ['Juan', 'Roberto', 'Ernesto', 'Miriam', 'Laura'];
/* nombres.forEach(nombre => console.log(`Conozco a alguien llamado ${nombre}`)); */

const numeros1 = [1,9,3,8,5,7];
/* numeros1.forEach(numero => console.log(numero*2)); */

const numeros2 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
let cont_positivos = 0;
let cont_negativos = 0;
let cont_zeros = 0;
numeros2.forEach(numero => {
    if (numero > 0){
        cont_positivos++
    }
    else if (numero < 0){
        cont_negativos++
    }
    else{
        cont_zeros++
    }
});
console.log(`Cantidad de positivos:  ${cont_positivos}`);
console.log(`Cantidad de negativos:  ${cont_negativos}`);
console.log(`Cantidad de zeros:  ${cont_zeros}`);


let positivos = 0;
let negativos = 0;
cont_positivos = 0;
cont_negativos = 0;
numeros2.forEach(numero => {
    if (numero > 0){
        positivos+=numero
        cont_positivos++
    }
    else if (numero < 0){
        negativos+=numero
        cont_negativos++
    }
});
console.log(`Media positivos: ${positivos/cont_positivos}`);
console.log(`Media positivos: ${negativos/cont_negativos}`);