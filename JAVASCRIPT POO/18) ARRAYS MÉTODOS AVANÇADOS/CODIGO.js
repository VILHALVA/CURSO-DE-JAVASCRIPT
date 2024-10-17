// `map()`
let numeros = [1, 2, 3, 4, 5];
let aoQuadrado = numeros.map(function(numero) {
    return numero ** 2;
});
console.log(aoQuadrado); // [1, 4, 9, 16, 25]

// `filter()`
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares); // [2, 4]

// `reduce()`
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(soma); // 15

// `forEach()`
let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(function(fruta) {
    console.log(fruta);
});
// "maçã"
// "banana"
// "laranja"

// `find()`
let numeros = [1, 2, 3, 4, 5];
let maiorQueDois = numeros.find(function(numero) {
    return numero > 2;
});
console.log(maiorQueDois); // 3

// `some()` e `every()`

let numeros = [1, 2, 3, 4, 5];
let algumMaiorQueDois = numeros.some(function(numero) {
    return numero > 2;
});
console.log(algumMaiorQueDois); // true

let todosMaiorQueZero = numeros.every(function(numero) {
    return numero > 0;
});
console.log(todosMaiorQueZero); // true
