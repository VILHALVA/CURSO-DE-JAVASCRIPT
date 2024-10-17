# OPERADORES
Operadores em JavaScript são símbolos ou palavras-chave que realizam operações em valores ou variáveis. Eles são usados para realizar cálculos, comparações, atribuições e outras ações em seu código JavaScript. Vamos explorar os principais tipos de operadores em JavaScript.

## Operadores Aritméticos
Os operadores aritméticos realizam operações matemáticas em valores numéricos. Alguns dos operadores aritméticos mais comuns incluem:

- `+`: Adição
- `-`: Subtração
- `*`: Multiplicação
- `/`: Divisão
- `%`: Módulo (resto da divisão)
- `++`: Incremento (aumenta o valor por 1)
- `--`: Decremento (diminui o valor por 1)

Exemplo:

```javascript
let a = 5;
let b = 3;
let soma = a + b; // 8
let multiplicacao = a * b; // 15
let resto = a % b; // 2
a++; // Incrementa 'a' para 6
b--; // Decrementa 'b' para 2
```

## Operadores de Atribuição
Os operadores de atribuição são usados para atribuir valores a variáveis. O operador mais simples é o `=`.

Exemplo:

```javascript
let x = 10;
let y = 5;
x = y; // Agora, 'x' é igual a 5
```

## Operadores de Comparação
Os operadores de comparação são usados para comparar valores e retornar um valor booleano (`true` ou `false`). Alguns dos operadores de comparação incluem:

- `==`: Igual a (compara valores)
- `!=`: Diferente de (compara valores)
- `===`: Estritamente igual a (compara valores e tipos)
- `!==`: Estritamente diferente de (compara valores e tipos)
- `>`: Maior que
- `<`: Menor que
- `>=`: Maior ou igual a
- `<=`: Menor ou igual a

Exemplo:

```javascript
let idade = 20;
let resultado = idade >= 18; // true
```

## Operadores Lógicos
Os operadores lógicos são usados para realizar operações lógicas em valores booleanos. Alguns dos operadores lógicos incluem:

- `&&`: E lógico (retorna `true` se ambos os operandos forem `true`)
- `||`: OU lógico (retorna `true` se pelo menos um dos operandos for `true`)
- `!`: NÃO lógico (inverte o valor booleano)

Exemplo:

```javascript
let temCarteiraDeMotorista = true;
let idade = 17;
let podeDirigir = temCarteiraDeMotorista && idade >= 18; // false
```

## Operador Ternário
O operador ternário é uma forma concisa de expressar uma condição em JavaScript. Ele tem a seguinte sintaxe:

```javascript
condicao ? valorSeVerdadeiro : valorSeFalso;
```

Exemplo:

```javascript
let idade = 20;
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
```

## Operador de Concatenação
O operador de concatenação `+` também é usado para unir strings em JavaScript.

Exemplo:

```javascript
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome; // "João Silva"
```

Estes são alguns dos operadores fundamentais em JavaScript que você usará frequentemente para realizar diversas operações em seu código. Eles são essenciais para a construção de lógica e manipulação de dados em JavaScript.