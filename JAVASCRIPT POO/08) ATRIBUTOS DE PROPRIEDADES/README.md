# Atributos de Propriedades
Os atributos de propriedades são características que podem ser aplicadas às propriedades de objetos em JavaScript. Esses atributos definem o comportamento e a acessibilidade das propriedades, tornando-se importantes para o controle e a segurança dos dados dentro dos objetos. Abaixo, exploramos os principais atributos de propriedades em JavaScript:

## Configurável (`configurable`)
O atributo `configurable` indica se uma propriedade pode ser reconfigurada ou excluída posteriormente. Se `configurable` for `true`, você pode usar `Object.defineProperty` para alterar os outros atributos da propriedade ou excluí-la com o operador `delete`. Se `configurable` for `false`, as tentativas de reconfigurar ou excluir a propriedade resultarão em erros.

Exemplo:

```javascript
let objeto = { prop: 42 };
Object.defineProperty(objeto, "prop", {
    configurable: false
});

// Isso lançará um erro:
// Object.defineProperty(objeto, "prop", { enumerable: false });
```

## Gravável (`writable`)
O atributo `writable` determina se você pode modificar o valor de uma propriedade após a sua criação. Se `writable` for `true`, você pode atribuir um novo valor à propriedade. Se `writable` for `false`, a propriedade se torna somente leitura.

Exemplo:

```javascript
let objeto = { prop: 42 };
Object.defineProperty(objeto, "prop", {
    writable: false
});

// Isso lançará um erro:
// objeto.prop = 100;
```

## Enumerável (`enumerable`)
O atributo `enumerable` define se uma propriedade será visível durante a enumeração das propriedades de um objeto. Se `enumerable` for `true`, a propriedade será listada durante a iteração em `for...in` ou ao usar métodos como `Object.keys()` e `Object.values()`. Se `enumerable` for `false`, a propriedade não será listada durante a enumeração.

Exemplo:

```javascript
let objeto = { prop1: 42, prop2: "olá" };
Object.defineProperty(objeto, "prop1", {
    enumerable: false
});

// prop1 não será listada na enumeração:
for (let prop in objeto) {
    console.log(prop); // "prop2"
}
```

## Acessando Atributos de Propriedades
Os atributos de propriedades podem ser acessados usando o método `Object.getOwnPropertyDescriptor()`:

```javascript
let objeto = { prop: 42 };
let descritor = Object.getOwnPropertyDescriptor(objeto, "prop");

console.log(descritor.configurable); // true
console.log(descritor.writable); // true
console.log(descritor.enumerable); // true
```

## Usos Comuns
- **Controle de Acesso**: Você pode usar atributos de propriedades para controlar quem pode modificar ou visualizar determinadas propriedades em um objeto, tornando-o útil para implementar encapsulamento de dados.
- **Impedir Modificações Indesejadas**: Definir propriedades como não configuráveis ou não graváveis pode proteger objetos contra modificações acidentais ou maliciosas.
- **Ocultar Propriedades Internas**: Você pode definir propriedades como não enumeráveis para ocultá-las durante a enumeração de propriedades, garantindo que apenas as propriedades desejadas sejam visíveis.

Os atributos de propriedades são uma parte importante da manipulação de objetos em JavaScript e são essenciais para criar objetos seguros e bem estruturados.