# MÉTODOS GETTERS, SETTERS E CONSTRUTORES 
Em JavaScript, você pode usar métodos getters, setters e construtores em classes para controlar o acesso aos atributos e definir valores iniciais. Esses métodos são úteis para garantir a encapsulação e o controle sobre as operações em objetos. Neste guia, vamos explorar como usar getters, setters e construtores em JavaScript.

## Construtores
Construtores são métodos especiais usados para inicializar objetos quando são criados a partir de uma classe. Eles são definidos usando o nome `constructor` e podem aceitar parâmetros para configurar os atributos do objeto.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

Neste exemplo, o construtor `Pessoa` aceita `nome` e `idade` como parâmetros e os usa para configurar os atributos da classe.

## Getters
Métodos getters são usados para recuperar o valor de um atributo. Eles são definidos usando a palavra-chave `get` seguida do nome do método.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }
}
```

Neste exemplo, os métodos getters `nome` e `idade` permitem recuperar os valores dos atributos `_nome` e `_idade`.

## Setters
Métodos setters são usados para definir o valor de um atributo. Eles são definidos usando a palavra-chave `set` seguida do nome do método.

Exemplo:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        if (novaIdade >= 0) {
            this._idade = novaIdade;
        }
    }
}
```

Neste exemplo, os métodos setters `nome` e `idade` permitem definir os valores dos atributos `_nome` e `_idade`, com validações opcionais, como no caso da idade para garantir que seja um valor não negativo.

## Uso de Getters e Setters
Ao usar getters e setters em uma classe, você pode acessar e modificar os atributos da classe de maneira controlada. Por exemplo:

```javascript
const pessoa = new Pessoa("João", 30);
console.log(pessoa.nome); // "João"
pessoa.nome = "Maria";
console.log(pessoa.nome); // "Maria"
pessoa.idade = -5; // A validação no setter idade impede um valor negativo
console.log(pessoa.idade); // 30
```

Observe que, ao acessar e definir os atributos, você usa a notação de ponto como se estivesse acessando propriedades diretamente, mas, na verdade, está chamando os métodos getters e setters definidos na classe.

## Conclusão
Métodos construtores, getters e setters são recursos importantes em JavaScript para criar classes com atributos controlados e encapsulados. Eles permitem que você defina comportamentos específicos ao acessar ou definir atributos, garantindo que seus objetos estejam em um estado válido.