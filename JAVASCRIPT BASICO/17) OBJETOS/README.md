# OBJETOS
Em JavaScript, objetos são estruturas de dados que permitem armazenar coleções de pares chave-valor, onde as chaves (ou nomes de propriedade) são strings únicas que atuam como identificadores para os valores associados. Os objetos são uma parte fundamental da linguagem e são amplamente utilizados para representar e organizar dados de forma estruturada. Neste artigo, exploraremos como criar, acessar e manipular objetos em JavaScript.

## Criando um Objeto

Em JavaScript, você pode criar um objeto de várias maneiras. A forma mais simples é usando a notação de objeto literal, que envolve um conjunto de pares chave-valor em chaves `{}`. Aqui está um exemplo básico:

```javascript
var pessoa = {
    nome: "João",
    idade: 30,
    profissao: "engenheiro"
};
```

Neste exemplo, criamos um objeto `pessoa` com três propriedades: `nome`, `idade` e `profissao`.

## Acessando Propriedades do Objeto

Você pode acessar as propriedades de um objeto usando a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto['propriedade']`). Aqui estão exemplos de ambas as formas:

```javascript
var nomeDaPessoa = pessoa.nome;       // "João"
var idadeDaPessoa = pessoa['idade'];  // 30
```

Você pode usar a notação de ponto quando a propriedade é uma string válida para identificar, mas a notação de colchetes é útil quando a chave é uma expressão ou contém caracteres especiais.

## Adicionando e Modificando Propriedades

Você pode adicionar ou modificar propriedades de um objeto a qualquer momento. Por exemplo:

```javascript
pessoa.cidade = "São Paulo";   // Adiciona uma nova propriedade
pessoa.idade = 31;             // Modifica uma propriedade existente
```

## Removendo Propriedades

Para remover uma propriedade de um objeto, você pode usar o operador `delete`:

```javascript
delete pessoa.profissao;  // Remove a propriedade "profissao"
```

## Iterando sobre Propriedades

Você pode iterar sobre as propriedades de um objeto usando um loop `for...in`. Isso é útil para processar todas as chaves e valores do objeto:

```javascript
for (var chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
```

## Objetos como Funções

Em JavaScript, os objetos também podem ser usados como funções. Quando um objeto é chamado como uma função, ele é considerado uma função construtora e pode criar novos objetos com base em seu modelo. Aqui está um exemplo:

```javascript
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

var meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.marca);   // "Toyota"
console.log(meuCarro.modelo);  // "Corolla"
```

Neste exemplo, a função `Carro` é usada como um construtor para criar um novo objeto `meuCarro`.

## Conclusão

Os objetos são uma parte fundamental da linguagem JavaScript e são usados para representar dados estruturados. Eles permitem que você organize informações relacionadas em uma única estrutura, facilitando a manipulação e o acesso a esses dados. Entender como criar, acessar e manipular objetos é essencial para se tornar um programador eficaz em JavaScript e construir aplicativos web dinâmicos e complexos.