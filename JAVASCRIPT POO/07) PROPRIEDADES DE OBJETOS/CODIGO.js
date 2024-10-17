var pessoa = {
    _idade: 29,
    nome: 'VILHALVA',
    sexo: 'MASCULINO',
    casado: false,
    get idade() {
        return this._idade;
    },
    set idade(value) {
        this._idade = value;
    }
};

pessoa.idade = 21;
console.log(pessoa.idade); 
