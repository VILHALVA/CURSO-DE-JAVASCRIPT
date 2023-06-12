class Pessoa {
  constructor(nome, idade) {
    this.nome = nome; // Propriedade pública
    this.idade = idade; // Propriedade pública
    this._cpf = ''; // Propriedade "privada" (convenção de nomenclatura com underline)
  }

  // Método público
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    this._exibirCPF(); // Chamada a um método "privado"
  }

  // Método "privado" (convenção de nomenclatura com underline)
  _exibirCPF() {
    console.log(`Meu CPF é ${this._cpf}.`);
  }
}

const pessoa = new Pessoa("João", 25);
pessoa.nome = "Maria"; // Acesso direto à propriedade pública
pessoa.apresentar(); // Chamada ao método público que acessa o método "privado"

/* Em JavaScript, a visibilidade dos membros de uma classe é controlada usando os modificadores de acesso: `public`, `private` e `protected`. No entanto, é importante observar que, até a data desse curso, o JavaScript não possui suporte nativo para modificadores de acesso. No entanto, é possível usar convenções de nomenclatura para indicar a intenção de visibilidade dos membros da classe.

Neste exemplo, usamos a convenção de nomenclatura com um underline prefixado para indicar que uma propriedade ou método é "privado". No entanto, é importante notar que isso não impede o acesso direto a esses membros, pois JavaScript não impõe restrições de acesso. A convenção é apenas uma forma de indicar a intenção de visibilidade.

Desta forma, podemos considerar as propriedades e métodos que começam com underline como "privados" e aqueles que não possuem um prefixo de underline como "públicos". No exemplo, a propriedade `nome` e `idade` são públicas, enquanto `_cpf` é considerada "privada". O método `_exibirCPF()` também é considerado "privado".

Lembre-se de que essa abordagem não é imposta pelo próprio JavaScript, mas sim uma convenção usada pela comunidade para indicar a visibilidade dos membros de uma classe. */