var pegarNome = function(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    console.log(this);
};

var pessoa = {
    nome:'RODRIGO',
    sobrenome: 'LIMA',
    idade: '29',
    getNome: pegarNome
};

var carros = {
    nome: 'GOL',
    marca: 'WW',
    getNome: pegarNome
};

pessoa.getNome();
carros.getNome();

pegarNome.call(pessoa, 'PEDRO', 'ROCHA');

pegarNome.apply(pessoa, ['PEDRO', 'ROCHA']);

pegarNome.bind(pessoa, 'PEDRO', 'ROCHA');