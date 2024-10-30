# ESSES COMANDOS DEVEM SER USADOS NO CONSOLE DE INSPECIONAR DO GOOGLE: 

## MENSAGEM EXIBIDA NA TELA:
```javascript
alert("OLÁ MUNDO!") 
```
Exibe uma caixa de alerta com a mensagem “OLÁ MUNDO!”. É útil para mostrar uma mensagem simples para o usuário ou testar alertas no navegador.

## MUDA A COR DA PÁGINA PARA PRETO:
```javascript
document.body.style.background = "black"
```
Muda a cor de fundo da página para preto, alterando o estilo do elemento `body`. Isso pode ser usado para testar temas escuros em uma página.

## MUDA A COR DA FONTE PARA BRANCO:
```javascript
document.body.style.color = "white"
```
Altera a cor da fonte de todos os textos dentro do `body` para branco, ideal para deixar o texto visível em um fundo preto.

## MUDA A COR DA LOGO PARA PRETO E BRANCO:
```javascript
document.querySelector('img#hp logo').style.filter = 'grayscale(100%)'
```
Aplica um filtro de escala de cinza (`grayscale`) à imagem com o ID `hp logo`, transformando-a em preto e branco. Isso é comum para testes de efeitos visuais ou design.

## OCULTA A LOGO:
```javascript
document.querySelector('img#hp logo').style.visibility = 'hidden' 
```
Esconde a imagem com o ID `hp logo`, tornando-a invisível sem removê-la do layout da página.

## ESSE COMANDO TROCA O TÍTULO DA PÁGINA:
```javascript
document.querySelector('span.bstn-hl-title').innerText = "O JAVA SCRIPT É UMA LINGUAGEM MUITO TOP"
```
Altera o texto dentro do elemento `span` com a classe `bstn-hl-title` para “O JAVA SCRIPT É UMA LINGUAGEM MUITO TOP”. Útil para personalizar títulos ou mensagens da página.

