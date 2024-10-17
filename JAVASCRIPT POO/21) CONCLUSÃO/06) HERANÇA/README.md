# HERANÇA 
A herança é um dos quatro pilares da Programação Orientada a Objetos (POO) e é um conceito importante que permite criar hierarquias de classes e reutilizar código de forma eficaz. A herança permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse). Vamos explorar os conceitos fundamentais da herança:

## Superclasse e Subclasse
- **Superclasse (Classe Pai)**: A classe da qual outras classes herdam atributos e métodos. Ela também é chamada de classe base.

- **Subclasse (Classe Filha)**: A classe que herda atributos e métodos da superclasse. Ela também é chamada de classe derivada.

A herança estabelece uma relação "é um", o que significa que uma subclasse é uma versão mais específica de sua superclasse.

## Exemplo de Herança
Vamos criar um exemplo simples de herança em JavaScript usando classes. Suponha que tenhamos uma classe `Animal` como superclasse e uma classe `Cachorro` como subclasse que herda de `Animal`.

```javascript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Animal faz algum som.");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Cachorro late.");
    }

    correr() {
        console.log(`${this.nome} está correndo.`);
    }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.fazerSom(); // "Cachorro late."
meuCachorro.correr(); // "Rex está correndo."
```

Neste exemplo, a classe `Cachorro` herda o atributo `nome` e o método `fazerSom()` da classe `Animal`. Além disso, a subclasse `Cachorro` possui seu próprio método `correr()`.

## Sobrescrita de Métodos
Uma subclasse pode substituir (sobrescrever) um método herdado de sua superclasse. Isso significa que a subclasse fornece uma implementação específica desse método, que substitui a implementação da superclasse.

No exemplo anterior, a subclasse `Cachorro` sobrescreveu o método `fazerSom()` da superclasse `Animal`.

## Vantagens da Herança
- **Reutilização de Código**: Você pode criar classes específicas reutilizando atributos e métodos de uma classe mais geral, economizando tempo e esforço na codificação.

- **Estrutura Hierárquica**: Você pode modelar hierarquias de classes que representam relacionamentos "é um", o que torna o código mais organizado e intuitivo.

- **Extensibilidade**: Você pode adicionar novos atributos e métodos às subclasses sem afetar a superclasse, permitindo que você estenda funcionalidades de forma modular.

## Conclusão
A herança é um conceito fundamental em Programação Orientada a Objetos que permite criar relacionamentos hierárquicos entre classes, reutilizar código e estender funcionalidades. Ao usar herança, você pode criar uma estrutura de classes que reflete de forma precisa e eficiente o domínio do problema que está modelando.