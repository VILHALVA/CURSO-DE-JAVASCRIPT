// Neste exemplo, vamos criar um sistema de cadastro de funcionários em uma empresa, onde teremos uma classe base abstrata `Funcionario` e classes derivadas representando diferentes tipos de funcionários.

// Classe base abstrata
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  // Método abstrato para calcular o bônus do funcionário
  calcularBonus() {
    throw new Error("Método calcularBonus() deve ser implementado pelas classes derivadas.");
  }

  // Método comum a todos os funcionários
  apresentar() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Salário: ${this.salario}`);
    console.log(`Bônus: ${this.calcularBonus()}`);
  }
}

// Classes derivadas representando tipos específicos de funcionários
class Gerente extends Funcionario {
  constructor(nome, salario) {
    super(nome, salario);
  }

  calcularBonus() {
    return this.salario * 0.2;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, salario) {
    super(nome, salario);
  }

  calcularBonus() {
    return this.salario * 0.1;
  }
}

// Criação de objetos de diferentes tipos de funcionários
const gerente1 = new Gerente("João", 5000);
const desenvolvedor1 = new Desenvolvedor("Maria", 4000);

// Chamada do método comum a todos os funcionários
gerente1.apresentar();
console.log("----------------");
desenvolvedor1.apresentar();

/* Neste exemplo, temos uma classe base abstrata `Funcionario` que contém um construtor que recebe o nome e o salário do funcionário. Essa classe possui um método abstrato `calcularBonus()` que deve ser implementado pelas classes derivadas.

As classes derivadas `Gerente` e `Desenvolvedor` herdam da classe `Funcionario` usando a palavra-chave `extends` e implementam o método `calcularBonus()` de acordo com as regras específicas de bônus para cada tipo de funcionário.

Ao criar objetos `gerente1` e `desenvolvedor1`, podemos chamá-los para apresentar seus dados usando o método `apresentar()` que está disponível em todas as instâncias da classe `Funcionario`. Esse método imprime o nome, salário e o resultado do cálculo de bônus, que é específico para cada tipo de funcionário devido à implementação do método `calcularBonus()` nas classes derivadas.

Esse exemplo ilustra o conceito de herança, onde as classes `Gerente` e `Desenvolvedor` herdam propriedades e métodos da classe `Funcionario`. Além disso, a classe base abstrata `Funcionario` usa abstração ao definir um método abstrato `calcularBonus()`, que deve ser implementado pelas classes derivadas. Isso força as classes derivadas a fornecerem uma implementação para esse método, garantindo que cada tipo de funcionário tenha seu próprio cálculo de bônus.*/