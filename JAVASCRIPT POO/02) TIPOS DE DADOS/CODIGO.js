// TIPOS PRIMITIVOS:
var nome = "rodrigo";
var idade = 18;
var valor = 20;
var sexo = "m";
var existe = false;
var endereço = null;
var primeiroChar = nome.charAt(2);
var nomeMaiusculo = nome.toUpperCase();
var nomeCaracter = nome.length;

console.log(!!idade);
console.log(!!existe);
console.log(endereço === null);
console.log(nome === null);
console.log(sexo);
console.log(primeiroChar);
console.log(nomeMaiusculo);
console.log(nomeCaracter);
console.log(valor.toFixed(2));

// TIPOS DE REFERÊNCIA:
var pessoa = new Object();
var pessoa2 = {
    'nome': 'Rodrigo',
    'idade': 300,
    'sexo': 'm'
};
console.log(typeof pessoa);
console.log(pessoa2);

var mostarNome = new Function("console.log('Rodrigo')");
mostarNome();

var carro = new Array('Gol', 'corolla', 'Opala');
console.log(carro);

var carros = ['Gol', 'corolla', 'Opala'];
console.log(carros);

function mostarIdade() {
    console.log("MINHA IDADE É "+15);
}
mostarIdade();

