//1. Usando a Sintaxe de Objeto Literal:
let pessoa = {
    nome: "João",
    idade: 30,
    sexo: "masculino"
};

//2. Usando a Notação de Colchetes e um Loop:
let objeto = {};
let propriedades = ["prop1", "prop2", "prop3"];

for (let prop of propriedades) {
    objeto[prop] = "Valor";
}

//3. Usando o Método `Object.assign()`:
let destino = {};
let origem1 = { prop1: "Valor1" };
let origem2 = { prop2: "Valor2" };
Object.assign(destino, origem1, origem2);

//4. Usando a Sintaxe de Espalhamento (Spread Syntax):
let objeto1 = { prop1: "Valor1" };
let objeto2 = { prop2: "Valor2" };
let objetoCombinado = { ...objeto1, ...objeto2 };
