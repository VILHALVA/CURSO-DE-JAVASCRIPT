// Criando um array
let frutas = ["maçã", "banana", "laranja"];

// Acessando elementos do array
console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "laranja"

// Propriedade Length
console.log(frutas.length); // 3

// Adicionando elementos
frutas.push("morango"); // Adiciona "morango" ao final do array

// Removendo elementos
frutas.pop(); // Remove o último elemento do array

// Iterando em um array usando um loop
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Iterando em um array usando forEach()
frutas.forEach(function(fruta) {
    console.log(fruta);
});

// Usando métodos de array
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobrados); // [2, 4, 6, 8, 10]
