// Definição da classe base Animal
class Animal {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    // Métodos getters e setters
    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    // Método para fazer o animal emitir som
    emitirSom() {
        console.log("O animal emite um som genérico.");
    }
}

// Definição da subclasse Cachorro
class Cachorro extends Animal {
    // Sobrescrevendo o método emitirSom para Cachorro
    emitirSom() {
        console.log("O cachorro late: Au Au!");
    }
}

// Definição da subclasse Gato
class Gato extends Animal {
    // Sobrescrevendo o método emitirSom para Gato
    emitirSom() {
        console.log("O gato mia: Miau!");
    }
}

// Instanciando objetos das classes Cachorro e Gato
const cachorro = new Cachorro("Rex", 3);
const gato = new Gato("Whiskers", 2);

// Chamando o método emitirSom de cada objeto
cachorro.emitirSom(); // O cachorro late: Au Au!
gato.emitirSom(); // O gato mia: Miau!
