
function echo(string){
    return string
}

function saludar(nombre){
    return `Hola ${nombre}!`
}

function test(val) {
	if (10<val || 20>val) { // Cambia esta línea
		return "Inside";
	}else {
		return "Outside";
	}
}

function testEqual(val) {
	if (val===12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
}

function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Mayor que 5";
	}
	else {
		result = "Menor o igual a 5";
	}
	return result;
}

function testElse(val) {
	let result = "";

	if (val > 5) {
		result = "Bigger than 5";
	}

	else if (val < 5) {
	result = "Smaller than 5";
	}

	else {
		result = "Equal to 5";
	}
	return result;
}

function nand(bool1, bool2){
    return !(bool1 && bool2)
}

function nor(bool1, bool2){
    return !(bool1 || bool2)
}

function xor(bool1, bool2){
    return bool1===bool2
}

console.log(xor(false, false))