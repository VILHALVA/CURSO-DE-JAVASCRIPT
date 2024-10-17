function mostrarNome() {
    return 'VILHALVA';
}
var receberNome = mostrarNome();
console.log(receberNome);

var teste = (typeof mostrarNome);
console.log(teste);

if (teste === 'function') {
    console.log(true);
}
else {
    console.log(false);
}

function showName() {
    return "JOÃO";
}

if (showName instanceof Function) {
    var nome = showName();
}
console.log(nome);

var carros = ['Gol', 'Uno', 'Corolla'];
if (carros instanceof Array) {
    console.log(carros);
}
else {
    console.log(typeof carros);
}

var auto = new Array('Gol', 'Uno', 'Corolla');
if (auto instanceof Array) {
    console.log(auto);
}
else {
    console.log(typeof auto);
}

if (Array.isArray(carros)) {
    console.log(carros);
}