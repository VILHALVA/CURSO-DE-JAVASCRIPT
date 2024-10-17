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
        console.log("O animal emite um som.");
    }
}

// Definição da subclasse Cachorro
class Cachorro extends Animal {
    // Método específico para Cachorro
    latir() {
        console.log("O cachorro late: Au Au!");
    }
}

// Definição da subclasse Gato
class Gato extends Animal {
    // Método específico para Gato
    miar() {
        console.log("O gato mia: Miau!");
    }
}

// Instanciando objetos das classes Cachorro e Gato
const cachorro = new Cachorro("Rex", 3);
const gato = new Gato("Whiskers", 2);

// Exibindo informações dos animais e fazendo-os emitir som
console.log("Nome do cachorro:", cachorro.nome);
console.log("Idade do gato:", gato.idade);

cachorro.latir();
gato.miar();
