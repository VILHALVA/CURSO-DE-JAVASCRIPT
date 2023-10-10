# VARIAVIES E TIPOS PRIMITIVOS
Variáveis e tipos primitivos são fundamentais em JavaScript. Variáveis permitem que você armazene e manipule dados, enquanto tipos primitivos representam os valores mais simples na linguagem. Neste artigo, vamos aprender sobre variáveis, os tipos primitivos mais comuns e como usá-los em JavaScript.

## Variáveis
Uma variável em JavaScript é um contêiner que você pode usar para armazenar valores. Elas são declaradas usando as palavras-chave `var`, `let`, ou `const`. Aqui está um exemplo:

```javascript
var nome = "João";
let idade = 30;
const PI = 3.1415;
```

- `var`: Declara uma variável com escopo de função.
- `let`: Declara uma variável com escopo de bloco.
- `const`: Declara uma variável de leitura apenas (constante).

## Tipos Primitivos
JavaScript possui seis tipos primitivos:

1. **String**: Usado para representar texto.

   ```javascript
   var nome = "Maria";
   ```

2. **Number**: Usado para representar números inteiros ou de ponto flutuante.

   ```javascript
   var idade = 25;
   var altura = 1.75;
   ```

3. **Boolean**: Usado para representar valores verdadeiro/falso.

   ```javascript
   var temCarro = true;
   ```

4. **Undefined**: Indica que uma variável não foi inicializada.

   ```javascript
   var endereco;
   ```

5. **Null**: Indica intencionalmente que uma variável não possui valor.

   ```javascript
   var cidade = null;
   ```

6. **Symbol** (ES6): Usado para criar valores únicos e imutáveis.

   ```javascript
   var id = Symbol("id");
   ```

## Operações com Tipos Primitivos
Você pode realizar operações com os tipos primitivos. Por exemplo:

```javascript
var numero1 = 5;
var numero2 = 3;
var soma = numero1 + numero2; // Soma números

var texto1 = "Olá, ";
var texto2 = "Mundo!";
var saudacao = texto1 + texto2; // Concatena strings

var booleano1 = true;
var booleano2 = false;
var resultado = booleano1 && booleano2; // Operações lógicas
```

## Conclusão
Variáveis e tipos primitivos são fundamentais em JavaScript. Eles permitem que você armazene, manipule e represente dados em seus programas. Certifique-se de entender como declarar variáveis, os diferentes tipos primitivos disponíveis e como realizar operações com eles. Com esses fundamentos, você estará pronto para escrever programas JavaScript mais complexos e poderosos.