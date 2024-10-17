var pessoa = {};
pessoa.nome = 'VILHALVA';
pessoa.idade = 29;
pessoa.sexo = 'MASCULINO';
pessoa.casado = false;

if ("casado" in pessoa) {
    delete pessoa.casado;
}

for (propriedade in pessoa) {
    console.log(propriedade);
    console.log(pessoa[propriedade]);
}

delete pessoa.idade;
console.log(pessoa);

var i, size;
var propriedades = Object.keys(pessoa);
for (i=0, size = propriedades.length; i < size; i++) {
    console.log(propriedades[i]); 
}
console.log(pessoa[propriedades[i]]); 

console.log(pessoa.propertyIsEnumerable("idade"));