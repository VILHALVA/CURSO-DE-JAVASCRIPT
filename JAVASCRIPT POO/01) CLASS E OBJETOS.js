// Definindo uma classe chamada "Pessoa"
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método da classe
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

// Criando objetos da classe Pessoa
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

// Chamando o método "apresentar()" em cada objeto
pessoa1.apresentar(); // Saída: Olá, meu nome é João e eu tenho 25 anos.
pessoa2.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.

/* Neste exemplo, temos uma classe chamada "Pessoa" com um construtor que recebe dois parâmetros: "nome" e "idade". Esses parâmetros são atribuídos às propriedades da classe com o mesmo nome. A classe também possui um método chamado "apresentar()" que exibe uma mensagem com o nome e a idade da pessoa.

Em seguida, criamos dois objetos da classe Pessoa usando a palavra-chave "new" seguida do nome da classe e passando os valores para o construtor. Podemos então chamar o método "apresentar()" em cada objeto para exibir a mensagem correspondente.

Essa é apenas uma introdução básica às classes e objetos em JavaScript POO. É possível criar métodos adicionais, adicionar propriedades, definir herança entre classes, entre outras coisas.
*/