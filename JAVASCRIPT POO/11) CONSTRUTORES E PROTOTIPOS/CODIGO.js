//Usando um Construtor para Criar Objetos:
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

let meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro); // { marca: "Toyota", modelo: "Corolla" }

//Adicionando Métodos ao Protótipo de um Construtor:
Carro.prototype.informacoes = function() {
    console.log(`Carro: ${this.marca} ${this.modelo}`);
};
meuCarro.informacoes(); // "Carro: Toyota Corolla"

//Herdando Propriedades e Métodos de Outro Objeto:
function Moto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}
Moto.prototype = Object.create(Carro.prototype);
let minhaMoto = new Moto("Honda", "CBR500R");
minhaMoto.informacoes(); // "Carro: Honda CBR500R"
