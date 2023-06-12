/* Métodos getters, setters e construtores são recursos importantes na programação orientada a objetos (POO) que permitem controlar o acesso e a modificação dos atributos de uma classe. Vou explicar cada um deles:

1. Construtores:
   O construtor é um método especial usado para inicializar os objetos quando eles são criados a partir de uma classe. Ele é identificado pelo nome "constructor" e é executado automaticamente no momento da criação do objeto. O construtor geralmente recebe parâmetros que são usados para definir os valores iniciais dos atributos da classe. */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa = new Pessoa("João", 25);


/* No exemplo acima, a classe "Pessoa" possui um construtor que recebe os parâmetros "nome" e "idade" e atribui esses valores às propriedades correspondentes da classe. Quando um objeto da classe é criado usando o operador `new`, o construtor é automaticamente chamado com os valores fornecidos.

2. Getters e Setters:
   Os métodos getters e setters são usados para obter e definir o valor de um atributo, respectivamente. Eles permitem controlar o acesso e a manipulação dos atributos de uma classe, aplicando lógica adicional, se necessário. Os getters são identificados pelo prefixo "get" seguido pelo nome do atributo, e os setters são identificados pelo prefixo "set" seguido pelo nome do atributo. */

class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }

  // Getter
  get nome() {
    return this._nome;
  }

  // Setter
  set nome(novoNome) {
    this._nome = novoNome;
  }
}

const Pessoa = new Pessoa("João");
console.log(pessoa.nome); // Saída: João
pessoa.nome = "Maria";
console.log(pessoa.nome); // Saída: Maria

/* No exemplo acima, a classe "Pessoa" possui um atributo "_nome" que é acessado por meio dos métodos getter e setter. O getter retorna o valor atual do atributo e o setter permite alterar o valor do atributo. Ao acessar `pessoa.nome`, o método getter é automaticamente chamado, retornando o valor atual do atributo. Ao atribuir um novo valor a `pessoa.nome`, o método setter é chamado, atualizando o valor do atributo.

Os getters e setters oferecem uma camada de encapsulamento, permitindo que a lógica adicional seja aplicada ao acessar ou modificar um atributo. Além disso, eles também permitem a validação dos valores atribuídos aos atributos antes de serem definidos.

Esses são recursos importantes em POO para controlar o acesso e a modificação dos atributos de uma classe, garantindo encapsulamento e fornecendo uma interface consistente para interagir com os objetos.*/