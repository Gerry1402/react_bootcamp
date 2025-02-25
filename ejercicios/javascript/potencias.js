const n = 3
const p = 4

let nfor = 1;
for (let index = 0; index < p; index++) {
    nfor = nfor*n;
}
console.log(nfor);

let contador = 0
let nwhile = 1
while (contador < p) {
    nwhile = nwhile * n
    contador++
}
console.log(nwhile);