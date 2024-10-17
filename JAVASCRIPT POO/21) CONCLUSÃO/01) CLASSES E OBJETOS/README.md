# CLASSES E OBJETOS 
A Programação Orientada a Objetos (POO) é um paradigma de programação amplamente utilizado em JavaScript. Neste guia, exploraremos os conceitos de classes e objetos em JavaScript e como eles são usados para modelar dados e comportamentos.

## Classes
Uma classe é um "modelo" que descreve os atributos e comportamentos que os objetos criados a partir dela terão. Em JavaScript, as classes foram introduzidas na ES6 (ECMAScript 2015) e são uma maneira conveniente de definir estruturas de objetos.

Aqui está um exemplo simples de uma classe em JavaScript:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
```

Neste exemplo, criamos uma classe chamada `Pessoa` com um construtor que aceita os atributos `nome` e `idade`. Também tem um método chamado `saudacao()` que exibe uma mensagem de saudação com base nos valores desses atributos.

## Objetos 
Os objetos são instâncias de classes. Eles são criados a partir de uma classe e herdam seus atributos e métodos. Aqui está como criar objetos a partir da classe `Pessoa`:

```javascript
let pessoa1 = new Pessoa("João", 30);
let pessoa2 = new Pessoa("Maria", 25);
```

Aqui, `pessoa1` e `pessoa2` são objetos criados a partir da classe `Pessoa`, com valores específicos para os atributos `nome` e `idade`.

## Acesso a Atributos e Métodos
Você pode acessar os atributos e métodos de um objeto usando a notação de ponto. Por exemplo:

```javascript
console.log(pessoa1.nome); // "João"
console.log(pessoa2.idade); // 25
pessoa1.saudacao(); // "Olá, meu nome é João e tenho 30 anos."
```

## Herança
Em JavaScript, você pode criar hierarquias de classes usando herança. Uma classe filha pode herdar atributos e métodos de uma classe pai. Por exemplo:

```javascript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    som() {
        console.log("Faz algum som");
    }
}

class Cachorro extends Animal {
    som() {
        console.log("Latindo");
    }
}
```

Neste exemplo, a classe `Cachorro` herda da classe `Animal` e sobrescreve o método `som()` para fornecer um comportamento específico para cachorros.

## Conclusão
Classes e objetos são fundamentais para a Programação Orientada a Objetos em JavaScript. Eles permitem criar estruturas de dados complexas, organizar o código de forma eficaz e reutilizar código por meio da herança. Entender como criar, usar e herdar classes e objetos é essencial para desenvolver aplicativos JavaScript eficazes e orientados a objetos.