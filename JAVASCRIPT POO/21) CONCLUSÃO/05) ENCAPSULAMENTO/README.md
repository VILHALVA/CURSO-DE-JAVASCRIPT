# ENCAPSULAMENTO 
O encapsulamento é um dos quatro pilares da Programação Orientada a Objetos (POO) e desempenha um papel fundamental na organização e proteção dos dados em um programa. Ele se baseia no conceito de ocultar detalhes internos de um objeto e fornecer uma interface pública para interagir com ele. Aqui estão os principais conceitos relacionados ao encapsulamento:

## Atributos Privados
A primeira etapa para o encapsulamento é definir atributos como privados, o que significa que eles não podem ser acessados diretamente fora da classe. Em muitas linguagens de programação, como Java ou C++, você usa modificadores de acesso como `private` para declarar atributos privados. No entanto, em JavaScript, a convenção é usar um sublinhado `_` como prefixo para indicar que um atributo é privado.

Exemplo em JavaScript:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
}
```

Neste exemplo, `_nome` e `_idade` são atributos privados da classe `Pessoa`.

## Métodos Públicos
Para acessar e modificar atributos privados, você fornece métodos públicos na classe, geralmente chamados de **métodos getters** e **métodos setters**. Os métodos getters permitem ler o valor de atributos privados, enquanto os métodos setters permitem definir novos valores para esses atributos.

Exemplo em JavaScript:

```javascript
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    // Método getter para nome
    get nome() {
        return this._nome;
    }

    // Método getter para idade
    get idade() {
        return this._idade;
    }

    // Método setter para nome
    set nome(novoNome) {
        this._nome = novoNome;
    }

    // Método setter para idade
    set idade(novaIdade) {
        if (novaIdade >= 0) {
            this._idade = novaIdade;
        }
    }
}
```

Com esses métodos getters e setters, você pode controlar o acesso aos atributos privados e, se desejar, aplicar validações antes de definir novos valores.

## Benefícios do Encapsulamento
- **Proteção de Dados**: A encapsulação ajuda a proteger os dados de uma classe, impedindo que sejam acessados ou modificados indevidamente.
- **Controle de Acesso**: Você tem controle total sobre como os atributos podem ser lidos ou modificados, o que ajuda a evitar valores inválidos.
- **Flexibilidade**: Você pode alterar a implementação interna de uma classe (por exemplo, renomear atributos) sem afetar o código que a utiliza, desde que a interface pública (métodos getters e setters) permaneça a mesma.

## Conclusão
O encapsulamento é um dos princípios fundamentais da POO e desempenha um papel importante na organização e proteção de dados em um programa. Ele ajuda a criar código mais seguro, flexível e fácil de manter, controlando o acesso aos atributos e promovendo uma interface pública bem definida.