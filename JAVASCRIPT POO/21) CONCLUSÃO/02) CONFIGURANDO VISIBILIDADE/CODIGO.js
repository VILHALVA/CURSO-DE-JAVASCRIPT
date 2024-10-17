// Definindo a classe Pessoa
class Pessoa {
    // Método construtor
    constructor(nome, idade) {
        // Atributos públicos
        this.nome = nome;
        // Atributo privado (simulado)
        let _idade = idade;

        // Método público para exibir informações
        this.exibirInformacoes = function() {
            console.log(`Nome: ${this.nome}, Idade: ${_idade}`);
        };

        // Método público para atualizar a idade
        this.atualizarIdade = function(novaIdade) {
            _idade = novaIdade;
            console.log(`${this.nome} teve sua idade atualizada para ${novaIdade} anos.`);
        };
    }
}

// Instanciando objetos da classe Pessoa
const pessoa1 = new Pessoa('João', 30);
const pessoa2 = new Pessoa('Maria', 25);

// Tentando acessar o atributo _idade diretamente (gerará um erro)
// console.log(pessoa1._idade);

// Exibindo informações das pessoas
pessoa1.exibirInformacoes();
pessoa2.exibirInformacoes();

// Atualizando a idade de uma pessoa
pessoa1.atualizarIdade(35);
pessoa1.exibirInformacoes();
