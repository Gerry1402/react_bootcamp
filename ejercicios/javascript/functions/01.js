

function saludar(booleano){
    if (booleano){
        console.log('Si, eso es cierto');
    }
    else{
        console.log('No, eso es falso')
    }
}

/* saludar(false) */

function hoyQuieroComer(comida){
    console.log(`Hoy quiero comer ${comida}`);
}

hoyQuieroComer('garbanzos')

function calcularCubo(numero){
    console.log(numero**3);
}
calcularCubo(3)

function calcularArea(ancho, alto){
    console.log(ancho*alto);
}

function calcularAreaT(ancho, alto){
    console.log(ancho*alto / 2);
}

calcularAreaT(4,6)

function calculaPerimetro(radio){
    console.log(2*Math.PI*radio)
}

function calculaArea(radio){
    console.log(Math.PI*radio**2)
}