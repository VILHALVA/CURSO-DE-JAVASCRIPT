# EVENTOS DOM
Eventos no DOM (Document Object Model) em JavaScript são a base para criar interatividade em páginas da web. Os eventos são ações ou ocorrências que acontecem em elementos HTML, como cliques do mouse, pressionamentos de tecla, movimento do mouse, redimensionamento da janela e muito mais. Neste artigo, vamos explorar como trabalhar com eventos no DOM.

## Conceito de Eventos

Os eventos ocorrem quando alguma ação é realizada em um elemento da página. Eles podem ser acionados pelo usuário (como um clique de mouse) ou pelo navegador (como o carregamento completo de uma página). Aqui estão alguns exemplos comuns de eventos:

- `click`: Acionado quando um elemento é clicado.
- `keydown`: Acionado quando uma tecla é pressionada.
- `mouseover` e `mouseout`: Acionados quando o mouse passa por cima ou sai de um elemento.
- `load`: Acionado quando uma página ou recurso é totalmente carregado.

## Adicionando Event Listeners

Para responder a eventos, você pode usar Event Listeners (ou ouvintes de eventos) em JavaScript. Um Event Listener é uma função que é executada quando um evento específico ocorre em um elemento específico. Veja como adicionar um Event Listener a um elemento:

```javascript
var botao = document.getElementById("meu-botao");

botao.addEventListener("click", function() {
    // Ação a ser executada quando o botão for clicado
    alert("Botão clicado!");
});
```

No exemplo acima, estamos adicionando um Event Listener ao elemento com o ID "meu-botao". Quando esse botão é clicado, a função anônima dentro do `addEventListener` é executada, exibindo um alerta.

## Removendo Event Listeners

Às vezes, é necessário remover um Event Listener, especialmente se você deseja desativar temporariamente a resposta a um evento. Você pode remover um Event Listener usando o método `removeEventListener`. Certifique-se de passar a mesma função de tratamento de evento que foi usada ao adicionar o listener:

```javascript
var botao = document.getElementById("meu-botao");

function minhaFuncaoDeTratamento() {
    alert("Botão clicado!");
}

botao.addEventListener("click", minhaFuncaoDeTratamento);

// Para remover o listener
botao.removeEventListener("click", minhaFuncaoDeTratamento);
```

## Event Object (Objeto de Evento)

Quando um evento ocorre, um objeto de evento é criado automaticamente e passado para a função de tratamento do evento. Esse objeto contém informações sobre o evento, como o tipo de evento, o elemento alvo, coordenadas do mouse, teclas pressionadas, entre outros. Você pode acessar essas informações dentro da função de tratamento do evento:

```javascript
var botao = document.getElementById("meu-botao");

botao.addEventListener("click", function(event) {
    alert("Botão clicado! Tipo de evento: " + event.type);
});
```

## Propagação de Eventos

Eventos podem se propagar através do DOM em duas fases: captura e borbulhamento. O evento flui do elemento pai para o elemento alvo durante a fase de captura e depois do elemento alvo de volta para o elemento pai durante a fase de borbulhamento. Você pode controlar em qual fase deseja responder a eventos usando o terceiro argumento do `addEventListener`:

```javascript
var botao = document.getElementById("meu-botao");

botao.addEventListener("click", function() {
    alert("Botão clicado!");
}, true); // O terceiro argumento define a fase de captura (true) ou borbulhamento (false)
```

## Eventos de Formulário

Em formulários HTML, há eventos específicos relacionados ao envio e validação de dados. Alguns exemplos incluem `submit` (enviado quando o formulário é submetido) e `input` (acionado quando um campo de entrada é alterado).

## Conclusão

Eventos no DOM são fundamentais para criar interatividade em páginas da web. Eles permitem que você responda a ações do usuário, como cliques e pressionamentos de tecla, e criem experiências dinâmicas. Este é apenas um breve resumo dos conceitos básicos de eventos no DOM; à medida que você avança no desenvolvimento web, você pode explorar eventos mais avançados e técnicas de manipulação de eventos para criar aplicativos web mais complexos e interativos.