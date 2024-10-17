// Definição da classe base Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this._marca = marca; // atributos encapsulados com underscore (_) para indicar privacidade
        this._modelo = modelo;
        this._ano = ano;
    }

    // Métodos getters
    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    get ano() {
        return this._ano;
    }

    // Métodos setters
    set marca(novaMarca) {
        this._marca = novaMarca;
    }

    set modelo(novoModelo) {
        this._modelo = novoModelo;
    }

    set ano(novoAno) {
        this._ano = novoAno;
    }

    // Método para exibir informações do veículo
    exibirInformacoes() {
        console.log(`Veículo: ${this._marca} ${this._modelo} (${this._ano})`);
    }

    // Método de acelerar (será sobreposto nas subclasses)
    acelerar() {
        console.log("Acelerando o veículo...");
    }
}

// Definição da subclasse Carro
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this._portas = portas;
    }

    // Métodos getters e setters específicos para Carro
    get portas() {
        return this._portas;
    }

    set portas(novasPortas) {
        this._portas = novasPortas;
    }

    // Sobrescrevendo o método de acelerar para carros
    acelerar() {
        console.log("Acelerando o carro...");
    }
}

// Definição da subclasse Moto
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this._cilindradas = cilindradas;
    }

    // Métodos getters e setters específicos para Moto
    get cilindradas() {
        return this._cilindradas;
    }

    set cilindradas(novasCilindradas) {
        this._cilindradas = novasCilindradas;
    }

    // Sobrescrevendo o método de acelerar para motos
    acelerar() {
        console.log("Acelerando a moto...");
    }
}

// Instanciando objetos das classes Carro e Moto
const carro = new Carro("Toyota", "Corolla", 2020, 4);
const moto = new Moto("Honda", "CBR600RR", 2019, 600);

// Exibindo informações dos veículos e acelerando
carro.exibirInformacoes();
carro.acelerar();

moto.exibirInformacoes();
moto.acelerar();

// Testando getters e setters
console.log("Marca do carro:", carro.marca);
console.log("Cilindradas da moto:", moto.cilindradas);

carro.marca = "Ford";
moto.cilindradas = 1000;

carro.exibirInformacoes();
moto.exibirInformacoes();
