import tablero from "./tablero";

const dimensiones = 5;
tablero(dimensiones)


let nombresJugadores = ["Jugador 1", "Jugador 2"];

let jugadores = { jugador1: {
                    nombre: nombresJugadores[0],
                    icono: "⭕",
                    posiciones: [[], []],
                    contador: 0,
                },
                jugador2: {
                    nombre: nombresJugadores[1],
                    icono: "❌",
                    posiciones: [[], []],
                    contador: 0,
                }
            };

let lastPlayer = "jugador2";

let emojis =[];

await fetch("emoji.json")
    .then(response => response.json()) // Convertir la respuesta en JSON
    .then(emojisData => emojis = emojisData.map(emoji => emoji.char))
    .catch(error => console.error("Error al cargar el JSON:", error));

const alternar = (token) => (token === "jugador1" ? "jugador2" : "jugador1");

const ganador = (jugador) => {
    const pos_filas = jugador[0];
    const pos_columnas = jugador[1];

    if (pos_filas.length < dimensiones) {
        return false;
    }

    if (pos_filas.filter((num, i) => num === pos_columnas[i]).length === dimensiones) {
        return true;
    }
    if (pos_filas.filter((num, i) => num + pos_columnas[i] === dimensiones - 1).length === dimensiones) {
        return true;
    }
    for (let index = 0; index < dimensiones; index++) {
        if (pos_filas.filter((elemento) => elemento === index).length == dimensiones) {
            return true;
        }
        if (pos_columnas.filter((elemento) => elemento === index).length == dimensiones) {
            return true;
        }
    }
    return false;
};

document.querySelectorAll(".casilla").forEach((casilla) => {
    casilla.addEventListener("click", function () {
        const jugador = jugadores[lastPlayer]
        casilla.classList.add("bloqueado");
        casilla.textContent = jugadores[lastPlayer].icono;
        jugadores[lastPlayer].posiciones[0].push(Number(casilla.getAttribute("data-row")));
        jugadores[lastPlayer].posiciones[1].push(Number(casilla.getAttribute("data-col")));
        if (ganador(jugadores[lastPlayer].posiciones)) {
            console.log("Ganador", lastPlayer);
            document.querySelector("#tabla").classList.add("bloqueado");
        }
        lastPlayer = alternar(lastPlayer);
    });
});

const reiniciar = () => {
    jugadores = { jugador1: [[], []], jugador2: [[], []] };
    document.querySelectorAll(".casilla").forEach((casilla) => {
        casilla.classList.remove("bloqueado");
        casilla.textContent = '';
    });
    
};
