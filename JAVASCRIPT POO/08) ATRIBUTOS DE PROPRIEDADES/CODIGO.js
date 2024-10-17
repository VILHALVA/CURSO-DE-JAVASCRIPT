// Criando um objeto com propriedades configuráveis, graváveis e enumeráveis
let pessoa = {
    nome: "João",
    idade: 30
};

// Definindo o atributo "configurable" como falso para a propriedade "nome"
Object.defineProperty(pessoa, "nome", {
    configurable: false
});

// Tentando reconfigurar a propriedade "nome" resultará em um erro
// Isso lançará um erro: TypeError: Cannot redefine property: nome
Object.defineProperty(pessoa, "nome", {
    enumerable: false
});

// Definindo o atributo "writable" como falso para a propriedade "idade"
Object.defineProperty(pessoa, "idade", {
    writable: false
});

// Tentando atribuir um novo valor à propriedade "idade" resultará em um erro
// Isso lançará um erro: TypeError: Cannot assign to read only property 'idade' of object
pessoa.idade = 31;

// Definindo o atributo "enumerable" como falso para a propriedade "idade"
Object.defineProperty(pessoa, "idade", {
    enumerable: false
});

// A propriedade "idade" não será listada durante a enumeração
for (let prop in pessoa) {
    console.log(prop); // Apenas "nome" será listado
}

// Ainda é possível acessar as propriedades "nome" e "idade"
console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 30
