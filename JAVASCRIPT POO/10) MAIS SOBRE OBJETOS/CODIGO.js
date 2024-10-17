// Obtendo Atributos de Propriedades:
let pessoa = { nome: "João", idade: 30 };
let descricao = Object.getOwnPropertyDescriptor(pessoa, "nome");
console.log(descricao);


//Evitando Modificações em Objetos:
let pessoa = { nome: "João", idade: 30 };
Object.freeze(pessoa);

// Tentar modificar o objeto resultará em um erro silencioso no modo estrito.
pessoa.idade = 31;
console.log(pessoa); // { nome: "João", idade: 30 }


// Evitando Extensões de Objetos:
let pessoa = { nome: "João", idade: 30 };
Object.preventExtensions(pessoa);

// Tentar adicionar uma nova propriedade resultará em um erro silencioso no modo estrito.
pessoa.novaPropriedade = "Novo Valor";

// Modificar propriedades existentes ainda é permitido.
pessoa.idade = 31;

console.log(pessoa); // { nome: "João", idade: 31 }


