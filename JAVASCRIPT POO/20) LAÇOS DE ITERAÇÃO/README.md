# Laços de Iteração
Os laços de iteração, também conhecidos como estruturas de repetição, são usados em JavaScript para executar um bloco de código várias vezes até que uma condição seja atendida. Existem várias estruturas de repetição em JavaScript, cada uma adequada a diferentes cenários. Neste guia, exploraremos os principais laços de iteração em JavaScript.

## 1. `for` Loop
O laço `for` é usado quando você sabe quantas vezes deseja repetir um bloco de código. Ele possui três partes: inicialização, condição e expressão de incremento.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 2. `while` Loop
O laço `while` é usado quando você não sabe antecipadamente quantas vezes o bloco de código deve ser repetido. Ele executa enquanto uma condição específica for verdadeira.

```javascript
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```

## 3. `do...while` Loop
Semelhante ao `while`, o laço `do...while` executa um bloco de código enquanto uma condição for verdadeira. No entanto, ele garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa desde o início.

```javascript
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 5);
```

## 4. `for...in` Loop
O laço `for...in` é usado para iterar sobre as propriedades de um objeto. Ele percorre todas as propriedades enumeráveis de um objeto.

```javascript
let carro = { marca: "Ford", modelo: "Mustang", ano: 2022 };
for (let chave in carro) {
    console.log(chave + ": " + carro[chave]);
}
```

## 5. `for...of` Loop
O laço `for...of` é usado para iterar sobre os elementos de um objeto iterável, como um array, uma string ou um mapa.

```javascript
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log(fruta);
}
```

## 6. `forEach()` Loop
O método `forEach()` é uma maneira conveniente de iterar sobre os elementos de um array e executar uma função para cada elemento.

```javascript
let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(function(fruta) {
    console.log(fruta);
});
```

## Conclusão
Os laços de iteração são fundamentais para controlar a repetição de tarefas em JavaScript. A escolha do laço a ser usado depende da situação específica e de quanta certeza você tem sobre o número de repetições necessárias. Compreender e dominar essas estruturas é essencial para escrever código eficiente e funcional em JavaScript.