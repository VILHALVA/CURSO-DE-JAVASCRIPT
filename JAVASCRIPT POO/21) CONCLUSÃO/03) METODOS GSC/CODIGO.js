// Definindo a classe Pessoa
class Pessoa {
    // Método construtor
    constructor(nome, idade) {
        this._nome = nome; // Atributo privado (simulado)
        this._idade = idade; // Atributo privado (simulado)
    }

    // Método getter para o atributo nome
    get nome() {
        return this._nome;
    }

    // Método setter para o atributo nome
    set nome(novoNome) {
        this._nome = novoNome;
    }

    // Método getter para o atributo idade
    get idade() {
        return this._idade;
    }

    // Método setter para o atributo idade
    set idade(novaIdade) {
        if (novaIdade >= 0) {
            this._idade = novaIdade;
        } else {
            console.log("A idade deve ser um número positivo.");
        }
    }

    // Método para exibir informações da pessoa
    exibirInformacoes() {
        console.log(`Nome: ${this._nome}, Idade: ${this._idade}`);
    }
}

// Instanciando objetos da classe Pessoa
const pessoa1 = new Pessoa('João', 30);
const pessoa2 = new Pessoa('Maria', 25);

// Exibindo informações das pessoas
pessoa1.exibirInformacoes();
pessoa2.exibirInformacoes();

// Acessando e modificando atributos utilizando getters e setters
console.log("Nome da pessoa 1:", pessoa1.nome); // Utilizando getter
pessoa1.nome = "João Silva"; // Utilizando setter
console.log("Novo nome da pessoa 1:", pessoa1.nome);

console.log("Idade da pessoa 2:", pessoa2.idade); // Utilizando getter
pessoa2.idade = 26; // Utilizando setter
console.log("Nova idade da pessoa 2:", pessoa2.idade);

// Tentando atribuir uma idade negativa (será rejeitado pelo setter)
pessoa1.idade = -5;
