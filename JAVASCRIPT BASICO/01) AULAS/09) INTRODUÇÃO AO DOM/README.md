# INTRODUÇÃO AO DOM
O DOM (Document Object Model) é um conceito fundamental no desenvolvimento web, especialmente ao programar em JavaScript. Ele representa a estrutura hierárquica de um documento HTML ou XML e permite que você interaja com os elementos da página, como textos, imagens, formulários, links e muito mais. Neste artigo, vamos fazer uma introdução ao DOM em JavaScript.

## O que é o DOM?

O DOM é uma representação em forma de árvore de um documento HTML ou XML. Ele fornece uma interface de programação que permite ao JavaScript acessar e manipular o conteúdo, a estrutura e o estilo de uma página da web. O DOM divide o documento em um conjunto de objetos, onde cada elemento HTML é representado por um nó, e esses nós são organizados em uma hierarquia que corresponde à estrutura do documento.

Por exemplo, considere o seguinte HTML simples:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de DOM</title>
</head>
<body>
    <h1>Meu Título</h1>
    <p>Este é um parágrafo.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</body>
</html>
```

O DOM representaria essa estrutura de maneira hierárquica, permitindo que você acesse cada elemento individualmente.

## Acesso e Manipulação do DOM em JavaScript

JavaScript é a linguagem de programação usada para acessar e manipular o DOM. Aqui estão algumas das operações mais comuns que você pode realizar:

### Selecionar Elementos

Você pode selecionar elementos do DOM usando métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector` e `querySelectorAll`. Por exemplo:

```javascript
// Seleciona um elemento pelo seu ID
var titulo = document.getElementById("meu-titulo");

// Seleciona todos os parágrafos
var paragrafos = document.getElementsByTagName("p");

// Seleciona um elemento usando seletores CSS
var primeiroItem = document.querySelector("ul li");
```

### Acessar e Modificar Conteúdo

Uma vez selecionados, você pode acessar e modificar o conteúdo dos elementos:

```javascript
// Acessa o texto de um elemento
var textoDoTitulo = titulo.textContent;

// Modifica o conteúdo de um elemento
titulo.textContent = "Novo Título";

// Acessa o valor de um campo de formulário
var input = document.getElementById("meu-input");
var valorDoInput = input.value;
```

### Manipular Atributos e Estilos

Você também pode manipular atributos e estilos dos elementos:

```javascript
// Acessa um atributo
var link = document.getElementById("meu-link");
var hrefDoLink = link.getAttribute("href");

// Modifica um atributo
link.setAttribute("href", "https://www.exemplo.com");

// Modifica estilos CSS
titulo.style.color = "blue";
```

### Adicionar e Remover Elementos

Você pode adicionar e remover elementos no DOM:

```javascript
// Criar um novo elemento
var novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um novo parágrafo.";

// Adicionar o novo elemento à página
document.body.appendChild(novoParagrafo);

// Remover um elemento
var elementoParaRemover = document.getElementById("para-remover");
elementoParaRemover.parentNode.removeChild(elementoParaRemover);
```

## Conclusão

O DOM é uma parte crucial do desenvolvimento web em JavaScript, permitindo que você crie páginas interativas e dinâmicas. Através do acesso e manipulação do DOM, você pode atualizar conteúdo, responder a eventos do usuário e criar experiências ricas na web. Este é apenas o começo do que você pode fazer com o DOM em JavaScript, e há muitos outros conceitos e técnicas avançadas para explorar à medida que você aprofunda seus conhecimentos.