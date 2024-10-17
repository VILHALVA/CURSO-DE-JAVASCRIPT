// Definindo a classe Pessoa
class Pessoa {
    // Construtor para inicializar os atributos da pessoa
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para exibir informações da pessoa
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }

    // Método para atualizar a idade da pessoa
    atualizarIdade(novaIdade) {
        this.idade = novaIdade;
        console.log(`${this.nome} teve sua idade atualizada para ${novaIdade} anos.`);
    }
}

// Instanciando objetos da classe Pessoa
const pessoa1 = new Pessoa('João', 30);
const pessoa2 = new Pessoa('Maria', 25);

// Exibindo informações das pessoas
pessoa1.exibirInformacoes();
pessoa2.exibirInformacoes();

// Atualizando a idade de uma pessoa
pessoa1.atualizarIdade(35);
pessoa1.exibirInformacoes();
