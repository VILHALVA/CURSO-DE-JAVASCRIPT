// Função construtora
function Animal(nome) {
    this.nome = nome;
}

// Adicionando um método ao protótipo da função construtora
Animal.prototype.emitirSom = function() {
    console.log(`O ${this.nome} faz um som.`);
};

// Função construtora que herda de Animal
function Cachorro(nome) {
    Animal.call(this, nome); // Chama o construtor de Animal
}

// Herdando o protótipo de Animal
Cachorro.prototype = Object.create(Animal.prototype);

// Adicionando um método específico para Cachorro
Cachorro.prototype.latir = function() {
    console.log(`${this.nome} está latindo.`);
};

// Criando uma instância de Cachorro
let meuCachorro = new Cachorro("Rex");

// Chamando métodos de Animal e Cachorro
meuCachorro.emitirSom(); // "O Rex faz um som."
meuCachorro.latir(); // "Rex está latindo."
