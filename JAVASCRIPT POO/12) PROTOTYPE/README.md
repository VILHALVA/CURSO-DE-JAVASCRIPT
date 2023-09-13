# Protótipo 
O protótipo é um mecanismo fundamental em JavaScript que permite a herança de propriedades e métodos entre objetos. Este guia explicará em detalhes o conceito de protótipo em JavaScript.

## O que é um Protótipo?
Em JavaScript, cada objeto possui uma referência a um protótipo (ou "proto"). O protótipo é outro objeto a partir do qual o objeto herda propriedades. Isso significa que, quando você tenta acessar uma propriedade ou método em um objeto, o mecanismo de protótipo verifica primeiro se o objeto possui essa propriedade ou método. Se não, ele busca no protótipo e continua subindo na cadeia de protótipos até encontrar a propriedade ou método desejado.

## Protótipo de Objeto Padrão
Todo objeto em JavaScript é criado com um protótipo. Por padrão, objetos têm o protótipo `Object.prototype`. Isso significa que eles herdam propriedades e métodos do `Object.prototype`.

```javascript
let objeto = {};

// O protótipo de 'objeto' é Object.prototype
console.log(objeto.toString()); // [object Object]
```

## Definindo Protótipos Personalizados
Você pode criar objetos com protótipos personalizados usando a propriedade `prototype` de funções construtoras. Aqui está um exemplo:

```javascript
function Pessoa(nome) {
    this.nome = nome;
}

Pessoa.prototype.cumprimentar = function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
};

let pessoa = new Pessoa("João");
pessoa.cumprimentar(); // "Olá, meu nome é João."
```

Neste exemplo, definimos uma função construtora `Pessoa` e adicionamos um método `cumprimentar` ao seu protótipo. Quando criamos uma instância de `Pessoa`, essa instância herda o método `cumprimentar` do protótipo `Pessoa.prototype`.

## Herança de Protótipos
Os objetos podem herdar propriedades e métodos de outros objetos definindo seu protótipo para ser igual a outro objeto. Isso é conhecido como herança de protótipos. Aqui está um exemplo:

```javascript
function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.emitirSom = function() {
    console.log("Som genérico de animal.");
};

function Cachorro(nome) {
    Animal.call(this, nome);
}

Cachorro.prototype = Object.create(Animal.prototype);

Cachorro.prototype.latir = function() {
    console.log("Latindo...");
};

let meuCachorro = new Cachorro("Rex");
meuCachorro.emitirSom(); // "Som genérico de animal."
meuCachorro.latir(); // "Latindo..."
```

Neste exemplo, temos um construtor `Animal` com um método `emitirSom`. Em seguida, criamos um construtor `Cachorro` que herda do protótipo de `Animal` usando `Object.create()`. Assim, `Cachorro` herda tanto o método `emitirSom` de `Animal` quanto o método `latir` específico de cachorro.

## Conclusão
O protótipo é um conceito poderoso em JavaScript que permite a herança de propriedades e métodos entre objetos, facilitando a criação de estruturas de código eficazes e reutilizáveis. Compreender como funcionam os protótipos é fundamental para a programação orientada a objetos em JavaScript.