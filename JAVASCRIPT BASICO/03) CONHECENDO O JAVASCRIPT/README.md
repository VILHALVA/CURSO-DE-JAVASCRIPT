# CONHECENDO O JS
O JavaScript é uma das linguagens de programação mais populares no desenvolvimento web. Ele é amplamente utilizado para criar funcionalidades interativas em sites, como animações, validações de formulários, e até mesmo aplicações completas no lado do cliente e servidor.

Aqui estão alguns conceitos básicos e recursos do JavaScript que podem te ajudar a começar:

### 1. **Variáveis**
   Variáveis são usadas para armazenar dados. No JavaScript moderno, usamos `let` e `const` para criar variáveis:
   ```javascript
   let nome = "João";    // pode ser alterado posteriormente
   const idade = 25;     // valor fixo, não pode ser alterado
   ```

### 2. **Tipos de Dados**
   Alguns dos principais tipos de dados em JavaScript incluem:
   - `String`: texto, como `"Olá, mundo!"`
   - `Number`: números, como `42` ou `3.14`
   - `Boolean`: verdadeiro (`true`) ou falso (`false`)
   - `Array`: lista de itens, como `[1, 2, 3]`
   - `Object`: estrutura com pares de chave-valor, como `{ nome: "Ana", idade: 30 }`

### 3. **Operadores**
   JavaScript possui vários operadores para realizar operações, como:
   - Aritméticos: `+`, `-`, `*`, `/`
   - Comparação: `==`, `===`, `!=`, `!==`, `>`, `<`
   - Lógicos: `&&` (e), `||` (ou), `!` (não)

### 4. **Estruturas de Controle**
   Controla o fluxo de execução do código:
   - `if`, `else if`, `else`: para condições.
   - `for`, `while`: para laços de repetição.
   ```javascript
   if (idade >= 18) {
       console.log("Maior de idade");
   } else {
       console.log("Menor de idade");
   }
   ```

### 5. **Funções**
   Funções são blocos de código que realizam uma tarefa específica e podem ser reutilizadas:
   ```javascript
   function saudacao(nome) {
       return `Olá, ${nome}!`;
   }
   console.log(saudacao("Mundo"));
   ```

### 6. **Manipulação do DOM**
   JavaScript é amplamente utilizado para interagir e manipular o DOM (Document Object Model), permitindo alterar a estrutura HTML e CSS da página:
   ```javascript
   document.querySelector('h1').innerText = "Novo título";
   ```

### 7. **Eventos**
   Eventos permitem que JavaScript responda a ações dos usuários, como cliques, rolagem e pressionamento de teclas:
   ```javascript
   document.querySelector('button').addEventListener('click', function() {
       alert("Botão clicado!");
   });
   ```

### 8. **Promises e Async/Await**
   Recursos mais avançados para trabalhar com operações assíncronas, como requisições de API, temporizadores e processamento paralelo:
   ```javascript
   async function buscarDados() {
       const resposta = await fetch('https://api.exemplo.com/dados');
       const dados = await resposta.json();
       console.log(dados);
   }
   ```

Esses conceitos são uma base sólida para iniciar com JavaScript. Conforme você pratica e experimenta, entenderá como combiná-los para criar funcionalidades interativas e dinâmicas.