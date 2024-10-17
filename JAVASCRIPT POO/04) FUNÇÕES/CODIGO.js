function mostraNome() {
    console.log('RODRIGO DECLARAÇÃO');
}
mostraNome();

var mostrarNome = function() {
    console.log("RODRIGO EXPRESSÃO!")
}
mostrarNome();

var Nome = function(nome, sobrenome) {
    var qtd = arguments.length;

    while (qtd > 0) {
        console.log(arguments);
        qtd--;
    }
}
var nome = Nome('RODRIGO', 'ROCHA', 'LIMA');
console.log(nome);