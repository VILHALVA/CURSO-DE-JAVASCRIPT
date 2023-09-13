# Tipos de Dados
JavaScript é uma linguagem de programação dinamicamente tipada, o que significa que as variáveis não têm tipos de dados fixos. Em vez disso, os tipos de dados são associados aos valores que as variáveis contêm. Abaixo, estão alguns dos tipos de dados mais comuns em JavaScript:

## 1. **Number**
O tipo `Number` representa valores numéricos, incluindo inteiros e números de ponto flutuante. Exemplos:

```javascript
let idade = 25;
let preco = 9.99;
```

## 2. **String**
O tipo `String` é usado para representar texto. Strings podem ser definidas com aspas simples (`'`) ou duplas (`"`).

```javascript
let nome = 'João';
let mensagem = "Olá, mundo!";
```

## 3. **Boolean**
O tipo `Boolean` representa valores verdadeiros ou falsos. É comumente usado em expressões condicionais.

```javascript
let estaChovendo = true;
let temSol = false;
```

## 4. **Undefined**
Uma variável que foi declarada, mas não recebeu um valor, tem o tipo `Undefined`.

```javascript
let variavelNaoDefinida;
console.log(variavelNaoDefinida); // undefined
```

## 5. **Null**
O valor `null` representa a ausência de valor ou a intenção de indicar que uma variável não possui um valor válido.

```javascript
let valorNulo = null;
```

## 6. **Object**
O tipo `Object` é usado para criar objetos, que podem conter propriedades e métodos.

```javascript
let pessoa = {
    nome: 'Maria',
    idade: 30,
    saudacao: function() {
        console.log('Olá!');
    }
};
```

## 7. **Array**
Arrays são objetos especiais em JavaScript usados para armazenar coleções ordenadas de valores.

```javascript
let frutas = ['maçã', 'banana', 'laranja'];
```

## 8. **Function**
Funções em JavaScript são objetos que podem ser chamados para executar um bloco de código.

```javascript
function somar(a, b) {
    return a + b;
}
```

## 9. **Symbol**
O tipo `Symbol` é usado para criar valores únicos e imutáveis. É comumente usado como chaves de propriedades em objetos.

```javascript
const chaveUnica = Symbol('descricao');
```

## 10. **BigInt**
O tipo `BigInt` permite representar números inteiros de tamanho arbitrariamente grande.

```javascript
const numeroGrande = 1234567890123456789012345678901234567890n;
```

Esses são alguns dos tipos de dados fundamentais em JavaScript. Lembre-se de que JavaScript é uma linguagem flexível e dinâmica, e você pode converter entre esses tipos de dados conforme necessário em seu código.