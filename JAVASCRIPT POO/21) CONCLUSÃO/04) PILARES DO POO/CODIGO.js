// Definição da classe base Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método para exibir informações do veículo
    exibirInformacoes() {
        console.log(`Veículo: ${this.marca} ${this.modelo} (${this.ano})`);
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
        this.portas = portas;
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
        this.cilindradas = cilindradas;
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
