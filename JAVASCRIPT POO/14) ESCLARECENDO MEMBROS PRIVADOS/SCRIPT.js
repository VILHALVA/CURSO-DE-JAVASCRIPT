//Usando Convenção de Nomenclatura:
function Pessoa(nome) {
    // Propriedade "privada" usando convenção de nomenclatura
    this._nome = nome;
}

Pessoa.prototype.getNome = function() {
    return this._nome;
};

let pessoa = new Pessoa("João");
console.log(pessoa._nome); // Acesso direto, mas não recomendado
console.log(pessoa.getNome()); // Acesso usando um método

//Usando Closure (Fechamento):
function Contador() {
    let _contador = 0; // Variável privada

    // Método público que acessa a variável privada
    this.incrementar = function() {
        _contador++;
    };

    this.getContagem = function() {
        return _contador;
    };
}

let contador = new Contador();
contador.incrementar();
console.log(contador.getContagem()); // 1
console.log(contador._contador); // Undefined (inacessível)
