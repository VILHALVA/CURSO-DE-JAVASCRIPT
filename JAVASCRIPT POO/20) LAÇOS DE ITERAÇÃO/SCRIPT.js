// `for` Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// `while` Loop
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// `do...while` Loop
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 5);

// `for...in` Loop
let carro = { marca: "Ford", modelo: "Mustang", ano: 2022 };
for (let chave in carro) {
    console.log(chave + ": " + carro[chave]);
}

// `for...of` Loop
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log(fruta);
}

// `forEach()` Loop
let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(function(fruta) {
    console.log(fruta);
});
