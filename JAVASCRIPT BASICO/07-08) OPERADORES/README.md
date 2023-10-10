# OPERADORES
Operadores são elementos fundamentais em JavaScript que permitem realizar operações em valores, variáveis e expressões. Eles desempenham um papel crucial na programação, permitindo que você realize cálculos, comparações e atribuições. Neste artigo, vamos explorar os principais tipos de operadores em JavaScript.

## Operadores Aritméticos

Os operadores aritméticos são usados para realizar cálculos matemáticos.

- **Adição (+)**: Realiza a adição de dois valores.

```javascript
var soma = 5 + 3; // soma é igual a 8
```

- **Subtração (-)**: Realiza a subtração de dois valores.

```javascript
var diferenca = 10 - 4; // diferença é igual a 6
```

- **Multiplicação (*)**: Realiza a multiplicação de dois valores.

```javascript
var produto = 6 * 7; // produto é igual a 42
```

- **Divisão (/)**: Realiza a divisão de dois valores.

```javascript
var quociente = 20 / 4; // quociente é igual a 5
```

- **Módulo (%)**: Retorna o resto da divisão entre dois valores.

```javascript
var resto = 10 % 3; // resto é igual a 1
```

## Operadores de Atribuição

Os operadores de atribuição são usados para atribuir valores a variáveis.

- **Atribuição (=)**: Atribui um valor a uma variável.

```javascript
var x = 5; // atribui o valor 5 à variável x
```

- **Atribuição com Adição (+=)**: Adiciona um valor a uma variável e atribui o resultado à variável.

```javascript
var y = 10;
y += 3; // y agora é igual a 13 (10 + 3)
```

## Operadores de Comparação

Os operadores de comparação são usados para comparar valores e retornar valores booleanos (verdadeiro ou falso).

- **Igual (==)**: Verifica se dois valores são iguais, mas não leva em consideração o tipo.

```javascript
var a = 5;
var b = "5";
var igual = a == b; // igual é verdadeiro (5 é igual a "5")
```

- **Estritamente Igual (===)**: Verifica se dois valores são iguais, levando em consideração o tipo.

```javascript
var c = 5;
var d = "5";
var estritamenteIgual = c === d; // estritamenteIgual é falso (5 não é estritamente igual a "5")
```

- **Diferente (!= e !==)**: Verifica se dois valores são diferentes. `!=` não leva em consideração o tipo, enquanto `!==` leva em consideração o tipo.

```javascript
var e = 5;
var f = "5";
var diferente = e != f; // diferente é falso (5 não é diferente de "5")
var estritamenteDiferente = e !== f; // estritamenteDiferente é verdadeiro (5 é estritamente diferente de "5")
```

## Operadores Lógicos

Os operadores lógicos são usados para combinar expressões booleanas.

- **E lógico (&&)**: Retorna verdadeiro se ambas as expressões forem verdadeiras.

```javascript
var g = true;
var h = false;
var resultadoE = g && h; // resultadoE é falso (true && false é falso)
```

- **OU lógico (||)**: Retorna verdadeiro se pelo menos uma das expressões for verdadeira.

```javascript
var i = true;
var j = false;
var resultadoOU = i || j; // resultadoOU é verdadeiro (true || false é verdadeiro)
```

- **NÃO lógico (!)**: Inverte o valor de uma expressão booleana.

```javascript
var k = true;
var resultadoNao = !k; // resultadoNao é falso (!true é falso)
```

## Operadores de Incremento e Decremento

Os operadores de incremento e decremento são usados para aumentar ou diminuir o valor de uma variável por 1.

- **Incremento (++):** Aumenta o valor de uma variável por 1.

```javascript
var contador = 0;
contador++; // contador agora é igual a 1
```

- **Decremento (--):** Diminui o valor de uma variável por 1.

```javascript
var contador = 5;
contador--; // contador agora é igual a 4
```

## Operadores de Concatenação

Os operadores de concatenação são usados para unir strings.

- **Concatenação (+):** Une duas ou mais strings.

```javascript
var saudacao = "Olá, ";
var nome = "Maria";
var mensagem = saudacao + nome; // mensagem é igual a "Olá, Maria"
```

Estes são alguns dos operadores mais comuns em JavaScript. Eles desempenham um papel fundamental na programação, permitindo que você realize uma variedade de operações em seus programas. A compreensão desses operadores é essencial para se tornar um programador JavaScript eficaz.