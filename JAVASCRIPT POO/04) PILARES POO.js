// 1. Encapsulamento:
class ContaBancaria {
  constructor(saldoInicial) {
    let saldo = saldoInicial; // Propriedade privada

    this.depositar = function (valor) {
      saldo += valor;
      console.log(`Depósito realizado. Novo saldo: ${saldo}`);
    };

    this.sacar = function (valor) {
      if (valor <= saldo) {
        saldo -= valor;
        console.log(`Saque realizado. Novo saldo: ${saldo}`);
      } 
      else {
        console.log("Saldo insuficiente.");
      }
    };
  }
}

const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500); // Depósito realizado. Novo saldo: 1500
minhaConta.sacar(200); // Saque realizado. Novo saldo: 1300
console.log(minhaConta.saldo); // undefined (propriedade privada não acessível)

// Neste exemplo, a classe `ContaBancaria` encapsula a lógica de depósito e saque em métodos públicos (`depositar` e `sacar`). A propriedade `saldo` é privada, acessível apenas dentro da classe por meio de um fechamento (closure) em JavaScript. Isso evita o acesso direto ao saldo de fora da classe, protegendo os dados.

// 2. Herança:
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log("Fazendo som...");
  }
}

class Cachorro extends Animal {
  latir() {
    console.log("Au au!");
  }
}

const meuCachorro = new Cachorro("Rex");
console.log(meuCachorro.nome); // Rex
meuCachorro.fazerSom(); // Fazendo som...
meuCachorro.latir(); // Au au!

// Neste exemplo, temos uma classe base `Animal` que possui um construtor e um método `fazerSom()`. A classe `Cachorro` herda da classe `Animal` usando a palavra-chave `extends` e adiciona um método `latir()`. O objeto `meuCachorro` é uma instância da classe `Cachorro` e pode acessar tanto os membros herdados da classe `Animal` (como `nome` e `fazerSom()`) quanto os membros específicos da classe `Cachorro` (como `latir()`).

// 3. Polimorfismo:
class Forma {
  calcularArea() {
    console.log("Área da forma desconhecida.");
  }
}

class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    const area = this.largura * this.altura;
    console.log(`Área do retângulo: ${area}`);
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    const area = Math.PI * Math.pow(this.raio, 2);
    console.log(`Área do círculo: ${area}`);
  }
}

const forma1 = new Retangulo(5, 10);
const forma2 =

 new Circulo(3);
forma1.calcularArea(); // Área do retângulo: 50
forma2.calcularArea(); // Área do círculo: 28.274333882308138

// Neste exemplo, temos uma classe base `Forma` que possui um método `calcularArea()`. As classes `Retangulo` e `Circulo` herdam de `Forma` e implementam o método `calcularArea()` de forma diferente, para calcular a área de um retângulo e um círculo, respectivamente. Apesar de ambos os objetos serem tratados como instâncias da classe `Forma`, o método `calcularArea()` é executado de acordo com a implementação específica em cada classe, demonstrando o polimorfismo.