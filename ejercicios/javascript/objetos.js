const miPerro ={
    'piernas': 3,
    'colas': 2,
    'amigos': 1
}
console.log(miPerro.piernas);
console.log(miPerro.colas);
console.log(miPerro.amigos);

const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = testObj.ojos;      // Cambiar esta línea
const nombre = testObj.nombre;    // Cambia esta línea

console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj2[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"

const myDog = {
    "nombre": "HappyCoder",
    "piernas": 4,
    "colas": 1,
};

// Modifica esta línea con el código necesario
console.log(myDog.nombre); // Debería mostrar: "HappyCoder"

function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
    result = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank",
    }

    // Sólo cambia el código por encima de esta línea
    return result[val];
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago

const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Michael Jacson",
        "titulo": "Moonlight",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    }
];
console.log(myMusic);

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box']; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]