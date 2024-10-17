# FUNÇÕES
Funções são blocos de código em JavaScript que podem ser chamados e executados para realizar tarefas específicas. Elas são fundamentais para organizar e reutilizar o código, tornando-o mais modular e fácil de manter. Neste artigo, exploraremos o conceito de funções em JavaScript, como criá-las e como usá-las.

## Criando uma Função

Uma função em JavaScript é definida usando a palavra-chave `function`, seguida do nome da função e um par de parênteses que podem conter parâmetros. O código que a função executa é definido dentro de um bloco de código delimitado por chaves `{}`. Aqui está uma estrutura básica de declaração de função:

```javascript
function nomeDaFuncao(parametro1, parametro2) {
    // Código da função aqui
}
```

- `nomeDaFuncao`: O nome da função, que deve ser único dentro do escopo.
- `parametro1`, `parametro2`, etc.: Parâmetros da função, que são variáveis usadas para receber valores quando a função é chamada. Os parâmetros são opcionais.

## Chamando uma Função

Uma vez que você definiu uma função, pode chamá-la em qualquer lugar do código, fornecendo os argumentos necessários (se houver) entre parênteses. Aqui está como chamar uma função:

```javascript
nomeDaFuncao(argumento1, argumento2);
```

- `nomeDaFuncao`: O nome da função que você deseja chamar.
- `argumento1`, `argumento2`, etc.: Os valores que você passa como argumentos para a função. Esses valores preenchem os parâmetros da função na ordem em que são fornecidos.

## Exemplo de Função

Aqui está um exemplo simples de uma função que calcula a soma de dois números:

```javascript
function somar(a, b) {
    return a + b;
}

var resultado = somar(5, 3); // Chama a função e armazena o resultado em "resultado"
console.log(resultado);     // Imprime 8
```

Neste exemplo:

- Definimos a função `somar` com dois parâmetros, `a` e `b`.
- Dentro da função, usamos o operador `return` para retornar o resultado da soma de `a` e `b`.
- Chamamos a função `somar` com os argumentos 5 e 3, que são atribuídos aos parâmetros `a` e `b`.
- O resultado da função é armazenado na variável `resultado` e, em seguida, é impresso no console.

## Funções Anônimas

Você também pode criar funções anônimas, que não têm um nome identificador. Essas funções são frequentemente usadas como argumentos para outras funções ou atribuídas a variáveis. Aqui está um exemplo:

```javascript
var dobrar = function(numero) {
    return numero * 2;
};

var resultado = dobrar(4); // Chama a função anônima e armazena o resultado em "resultado"
console.log(resultado);   // Imprime 8
```

Neste exemplo, definimos uma função anônima e a atribuímos à variável `dobrar`. Em seguida, chamamos a função usando `dobrar(4)`.

## Escopo de Variáveis

Funções também podem criar seu próprio escopo de variáveis. Variáveis declaradas dentro de uma função são conhecidas como variáveis locais e não são acessíveis fora da função. Isso ajuda a evitar conflitos de nomes de variáveis em diferentes partes do código.

## Conclusão

As funções são uma parte fundamental da programação JavaScript. Elas permitem que você encapsule e reutilize blocos de código, tornando seu código mais organizado e mais fácil de manter. Ao criar funções com nomes significativos e parâmetros bem definidos, você pode criar código mais legível e modular, facilitando a resolução de problemas complexos em JavaScript.