# CONDICIONAIS COMPOSTAS
As condicionais compostas em JavaScript permitem que você execute diferentes blocos de código com base em múltiplas condições. Isso é útil quando você precisa avaliar mais de uma condição para tomar decisões em seu programa. As condicionais compostas geralmente são implementadas usando as instruções `if`, `else if` e `else`. Vamos explorar como funcionam as condicionais compostas em JavaScript.

## Estrutura Básica de uma Condicional Composta

A estrutura básica de uma condicional composta em JavaScript é a seguinte:

```javascript
if (condicao1) {
    // Bloco de código a ser executado se a condicao1 for verdadeira
} else if (condicao2) {
    // Bloco de código a ser executado se a condicao2 for verdadeira
} else {
    // Bloco de código a ser executado se nenhuma das condições anteriores for verdadeira
}
```

- `if`: Verifica a primeira condição.
- `else if`: Verifica condições adicionais, se necessário.
- `else`: Executa um bloco de código se nenhuma das condições anteriores for verdadeira.

Apenas o bloco de código associado à primeira condição verdadeira (ou ao bloco `else` caso nenhuma condição seja verdadeira) será executado.

## Exemplo de Condicional Composta

Aqui está um exemplo prático de uma condicional composta:

```javascript
var idade = 18;
var possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
    console.log("Pode dirigir um carro.");
} else if (idade >= 16) {
    console.log("Pode dirigir uma moto.");
} else {
    console.log("Não pode dirigir veículos motorizados.");
}
```

Neste exemplo:

- A primeira condição verifica se a idade é maior ou igual a 18 anos e se a pessoa possui uma carteira de motorista. Se ambas as condições forem verdadeiras, o código dentro do primeiro bloco `if` será executado.
- A segunda condição, representada pelo `else if`, verifica se a idade é maior ou igual a 16 anos. Se a primeira condição não for verdadeira, mas esta for, o código dentro do segundo bloco `else if` será executado.
- Se nenhuma das condições anteriores for verdadeira, o bloco `else` será executado.

## Operadores Lógicos

As condicionais compostas frequentemente usam operadores lógicos, como `&&` (e) e `||` (ou), para combinar várias condições. Os operadores lógicos permitem criar condições mais complexas. Por exemplo:

```javascript
var idade = 18;
var possuiCarteiraDeMotorista = false;

if (idade >= 18 && possuiCarteiraDeMotorista) {
    console.log("Pode dirigir um carro.");
} else if (idade >= 16) {
    console.log("Pode dirigir uma moto.");
} else {
    console.log("Não pode dirigir veículos motorizados.");
}
```

Neste exemplo, a pessoa precisa ser maior de 18 anos **e** possuir uma carteira de motorista para dirigir um carro.

## Conclusão

As condicionais compostas são uma parte essencial da programação em JavaScript, permitindo que você tome decisões com base em várias condições. Elas são úteis para lidar com situações complexas em que você precisa avaliar várias condições antes de decidir o fluxo do seu programa. Compreender a estrutura e o uso de condicionais compostas é fundamental para o desenvolvimento de aplicativos JavaScript eficazes.