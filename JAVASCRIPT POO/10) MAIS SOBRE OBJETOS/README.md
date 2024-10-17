# MAIS SOBRE OBJETOS
Em JavaScript, você pode usar métodos e atributos para controlar o acesso a propriedades de objetos, evitar modificações acidentais nos objetos e impedir que novas propriedades sejam adicionadas aos objetos. Vou explicar esses conceitos e mostrar como aplicá-los em um exemplo prático.

## Obtendo Atributos de Propriedades
Para obter os atributos de propriedades de um objeto, você pode usar o método `Object.getOwnPropertyDescriptor(objeto, propriedade)`. Este método retorna um objeto que descreve os atributos da propriedade especificada.

```javascript
let pessoa = { nome: "João", idade: 30 };
let descricao = Object.getOwnPropertyDescriptor(pessoa, "nome");
console.log(descricao);

// Saída:
// {
//   value: "João",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

## Evitando Modificações em Objetos
Para evitar modificações acidentais em objetos, você pode usar o método `Object.freeze(objeto)`. Isso tornará o objeto imutável, impedindo a adição, remoção ou modificação de propriedades existentes.

```javascript
let pessoa = { nome: "João", idade: 30 };
Object.freeze(pessoa);

// Tentar modificar o objeto resultará em um erro silencioso no modo estrito.
pessoa.idade = 31;
console.log(pessoa); // { nome: "João", idade: 30 }
```

## Evitando Extensões de Objetos
Para evitar que novas propriedades sejam adicionadas a um objeto, você pode usar o método `Object.preventExtensions(objeto)`. Isso impede a adição de novas propriedades ao objeto, mas ainda permite a modificação das propriedades existentes.

```javascript
let pessoa = { nome: "João", idade: 30 };
Object.preventExtensions(pessoa);

// Tentar adicionar uma nova propriedade resultará em um erro silencioso no modo estrito.
pessoa.novaPropriedade = "Novo Valor";

// Modificar propriedades existentes ainda é permitido.
pessoa.idade = 31;

console.log(pessoa); // { nome: "João", idade: 31 }
```

Lembre-se de que o uso desses métodos tornará seu objeto imutável ou impedirá a adição de novas propriedades, então escolha a abordagem que melhor atenda às suas necessidades de segurança e design de objeto.