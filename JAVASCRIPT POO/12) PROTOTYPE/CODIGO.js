// Definindo uma função construtora
function Pessoa(nome) {
    this.nome = nome;
}

// Adicionando um método ao protótipo da função construtora
Pessoa.prototype.cumprimentar = function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
};

// Criando uma instância da Pessoa
let pessoa = new Pessoa("João");

// Chamando o método cumprimentar da instância
pessoa.cumprimentar(); // "Olá, meu nome é João."
