# VARIAVEIS COMPOSTAS
Variáveis compostas em JavaScript são estruturas que permitem armazenar e manipular conjuntos de valores relacionados sob um único nome. As duas principais variáveis compostas em JavaScript são arrays e objetos. Vamos explorar essas variáveis compostas e como usá-las.

## Arrays

Um array é uma variável composta que armazena uma coleção de valores ordenados, acessíveis por índices numéricos. Cada elemento dentro de um array pode ser de qualquer tipo de dados, incluindo números, strings, objetos, ou até mesmo outros arrays.

### Criando e Acessando Arrays

Aqui está como criar e acessar arrays em JavaScript:

```javascript
// Criando um array
var frutas = ["maçã", "banana", "laranja"];

// Acessando elementos de um array
var primeiraFruta = frutas[0]; // "maçã"
var segundaFruta = frutas[1];  // "banana"
```

### Manipulando Arrays

Você pode adicionar, remover e modificar elementos em um array usando várias funções e métodos, como `push`, `pop`, `shift`, `unshift`, `splice`, e muitos outros.

```javascript
var frutas = ["maçã", "banana", "laranja"];

// Adicionando elementos ao final do array
frutas.push("morango");  // ["maçã", "banana", "laranja", "morango"]

// Removendo o último elemento
frutas.pop();  // ["maçã", "banana", "laranja"]

// Adicionando um elemento no início do array
frutas.unshift("uva");  // ["uva", "maçã", "banana", "laranja"]

// Removendo o primeiro elemento
frutas.shift();  // ["maçã", "banana", "laranja"]

// Modificando elementos
frutas[1] = "pera";  // ["maçã", "pera", "laranja"]
```

## Objetos

Um objeto é outra variável composta que armazena uma coleção de pares chave-valor. Cada chave é uma string única que atua como um identificador para o valor associado. Os valores podem ser de qualquer tipo de dado, incluindo números, strings, funções e até mesmo outros objetos.

### Criando e Acessando Objetos

Aqui está como criar e acessar objetos em JavaScript:

```javascript
// Criando um objeto
var pessoa = {
    nome: "João",
    idade: 30,
    profissao: "engenheiro"
};

// Acessando propriedades de um objeto
var nomeDaPessoa = pessoa.nome;       // "João"
var idadeDaPessoa = pessoa["idade"];  // 30
```

### Manipulando Objetos

Você pode adicionar, remover e modificar propriedades em um objeto:

```javascript
var pessoa = {
    nome: "João",
    idade: 30,
    profissao: "engenheiro"
};

// Adicionando uma nova propriedade
pessoa.cidade = "São Paulo";

// Removendo uma propriedade
delete pessoa.profissao;

// Modificando uma propriedade
pessoa.idade = 31;
```

## Conclusão

Variáveis compostas, como arrays e objetos, são componentes fundamentais na programação JavaScript. Eles permitem que você armazene, acesse e manipule conjuntos de valores relacionados de maneira eficiente. Compreender como criar, acessar e manipular arrays e objetos é essencial para se tornar um programador JavaScript eficaz e construir aplicativos web dinâmicos e complexos.