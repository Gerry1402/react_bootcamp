export const tablero = (dimensiones) => {
    document.querySelector("#tabla").innerHTML = "";
    document.querySelector("#tabla").style.gridTemplateColumns = `repeat(${dimensiones}, 1fr)`;
    document.querySelector("#tabla").style.gridTemplateRows = `repeat(${dimensiones}, 1fr)`;
    for (let index = 0; index < dimensiones ** 2; index++) {
        document.querySelector("#tabla").innerHTML += `<div class="casilla" data-row="${Math.floor(index / dimensiones)}" data-col="${index % dimensiones}"></div>`;
    }
}