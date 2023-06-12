// Neste exemplo, vamos simular um sistema de autenticação de usuário em uma aplicação.

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    let _senha = senha; // Propriedade privada

    this.autenticar = function (senha) {
      return _senha === senha;
    };
  }

  getNome() {
    return this.nome;
  }
}

const usuario1 = new Usuario("João", "123456");

console.log(usuario1.nome); // João (propriedade pública acessível)
console.log(usuario1._senha); // undefined (propriedade privada não acessível)
console.log(usuario1.autenticar("123456")); // true (método público acessível)
console.log(usuario1.autenticar("senhaerrada")); // false (método público acessível)
console.log(usuario1.getNome()); // João (método público acessível)

/* Neste exemplo, temos uma classe `Usuario` que possui um construtor que recebe o nome e a senha do usuário. O construtor armazena o nome na propriedade pública `nome` e a senha em uma propriedade privada `_senha`, usando a convenção de nomenclatura com um underline.

A classe também possui um método público `autenticar(senha)` que compara a senha fornecida com a senha armazenada na propriedade privada `_senha`. Esse método retorna `true` se as senhas coincidirem, e `false` caso contrário.

Além disso, a classe possui um método público `getNome()` que retorna o nome do usuário.

Ao criar um objeto `usuario1` da classe `Usuario`, podemos acessar a propriedade pública `nome` diretamente. No entanto, a propriedade privada `_senha` não é acessível fora da classe. Podemos chamar o método público `autenticar(senha)` para verificar se a senha fornecida corresponde à senha armazenada. Também podemos chamar o método público `getNome()` para obter o nome do usuário.

Essa é uma forma de encapsular os dados sensíveis do usuário (como a senha) e fornecer uma interface pública para interagir com os objetos da classe `Usuario`. */