# APÊNDICE
## REGRAS DO JAVASCRIPT:
1. JavaScript é uma linguagem de programação amplamente utilizada que pode ser executada em diferentes ambientes, sendo dois dos principais o navegador web e o ambiente Node.js no console. Aqui estão algumas informações sobre essas duas abordagens:

**JavaScript no Navegador (com HTML e DOM)**:
   - **Front-End**: No navegador, JavaScript é amplamente utilizado para criar aplicações web interativas e dinâmicas. Ele interage com o Document Object Model (DOM) do HTML para manipular a estrutura e o conteúdo das páginas web.
   - **Eventos**: JavaScript no navegador é usado para lidar com eventos do usuário, como cliques de mouse, pressionamentos de teclas e envio de formulários.
   - **Comunicação com Servidor**: Pode ser usado para fazer requisições AJAX para se comunicar com um servidor e atualizar partes de uma página sem a necessidade de recarregar a página inteira.
   - **Bibliotecas e Frameworks**: Existem muitas bibliotecas e frameworks JavaScript populares, como jQuery, React, Angular e Vue.js, que facilitam o desenvolvimento de aplicações web complexas.

**JavaScript no Console (Node.js)**:
   - **Back-End**: Node.js é um ambiente de execução JavaScript no lado do servidor. Ele permite que você crie aplicativos de servidor, APIs, scripts de linha de comando e muito mais usando JavaScript.
   - **Módulos e NPM**: Node.js facilita a organização de código em módulos e a instalação de bibliotecas de terceiros usando o npm (Node Package Manager).
   - **Manipulação de Arquivos**: É possível acessar o sistema de arquivos, criar, ler e escrever arquivos com JavaScript no Node.js.
   - **Programação Assíncrona**: JavaScript no Node.js lida bem com programação assíncrona, tornando-o adequado para operações de entrada/saída intensivas, como solicitações de rede e operações de arquivo.

A escolha de usar JavaScript no navegador ou no console (Node.js) depende dos requisitos do seu projeto:

- Se você está criando uma aplicação web, JavaScript no navegador é essencial para adicionar interatividade às suas páginas web.
- Se você precisa criar um servidor web, automatizar tarefas no sistema operacional ou executar tarefas de linha de comando, Node.js é a escolha apropriada.

Em muitos casos, desenvolvedores full-stack usam JavaScript tanto no front-end quanto no back-end para criar aplicativos web completos. Isso permite compartilhar lógica entre o cliente e o servidor e simplificar o desenvolvimento. No entanto, é importante ter em mente que os contextos de execução do JavaScript no navegador e no Node.js têm algumas diferenças, especialmente quando se trata de APIs disponíveis, portanto, é necessário estar ciente dessas diferenças ao trabalhar em ambos os ambientes.

2. Você não é obrigado a terminar os comandos com `;`.

3. Tem um padrão comum usado em código JavaScript/Node.js que envolve o uso de parênteses e chaves para criar blocos de código. Esse padrão é frequentemente usado para criar módulos e funções autoexecutáveis (também conhecidas como Immediately Invoked Function Expressions - IIFE).

Aqui está uma explicação desse padrão:

**Parênteses Externos**:
   - Os parênteses externos `()` são usados para definir uma expressão de função. Isso é necessário porque no JavaScript, quando você declara uma função usando a palavra-chave `function`, ela é considerada uma declaração de função e não pode ser chamada diretamente.

**Parênteses Internos**:
   - Os parênteses internos `( )` são usados para envolver uma função anônima. Isso cria uma função que é definida e executada imediatamente.

**Chaves**:
   - As chaves `{ }` são usadas para definir o corpo da função. O código dentro das chaves é executado quando a função é chamada.

Este padrão é frequentemente usado em módulos Node.js para encapsular o escopo de um módulo e evitar que variáveis locais do módulo poluam o escopo global. 

4. No JavaScript, "let", "var" e "const" são três palavras-chave usadas para declarar variáveis, mas elas têm diferenças importantes em relação ao escopo e à mutabilidade. Aqui está uma breve explicação de cada uma:

**var**:
   - **Escopo de função**: Variáveis declaradas com `var` têm escopo de função, o que significa que elas são visíveis em toda a função em que foram declaradas.
   - **Hoisting**: As declarações `var` são "elevadas" (hoisted) para o topo da função ou escopo em que estão, o que significa que elas podem ser usadas antes mesmo de serem declaradas. No entanto, o valor atribuído a elas só é definido no momento em que são declaradas.
   - **Mutabilidade**: Variáveis `var` podem ser reatribuídas e atualizadas em qualquer lugar do escopo em que foram declaradas.

**let**:
   - **Escopo de bloco**: Variáveis declaradas com `let` têm escopo de bloco, o que significa que elas são visíveis apenas dentro do bloco em que foram declaradas (um bloco é delimitado por chaves `{}`). Isso inclui escopos de função, loops `for`, condicionais `if`, etc.
   - **Hoisting**: Assim como as variáveis `var`, as declarações `let` também são "elevadas" para o topo do escopo de bloco, mas elas não são inicializadas até que a execução alcance a declaração.
   - **Mutabilidade**: Variáveis `let` podem ser reatribuídas, mas não podem ser redeclaradas no mesmo escopo.

**const**:
   - **Escopo de bloco**: Variáveis declaradas com `const` também têm escopo de bloco, assim como o `let`.
   - **Hoisting**: Assim como o `let`, as declarações `const` são "elevadas" para o topo do escopo de bloco, mas também não são inicializadas até que a execução alcance a declaração.
   - **Mutabilidade**: A principal diferença entre `const` e `let` é que as variáveis `const` não podem ser reatribuídas após a atribuição inicial. Isso significa que uma vez que você atribui um valor a uma variável `const`, você não pode alterá-lo posteriormente.

É uma boa prática usar `const` sempre que possível, pois ajuda a tornar o código mais previsível e menos propenso a erros. Use `let` quando você precisa reatribuir variáveis e evite o uso de `var`, pois pode levar a problemas de escopo inesperados.