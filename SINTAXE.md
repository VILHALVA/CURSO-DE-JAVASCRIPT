# SINTAXE DA LINGUAGEM:
## 0) FUNDAMENTOS:
Aqui está um exemplo de código em JavaScript que utiliza os operadores aritméticos, relacionais e lógicos com tipos primitivos:
```javascript
// Operadores aritméticos
let x = 10;
let y = 5;

let soma = x + y;  // Soma: 15
let subtracao = x - y;  // Subtração: 5
let multiplicacao = x * y;  // Multiplicação: 50
let divisao = x / y;  // Divisão: 2
let resto = x % y;  // Resto da divisão: 0

// Operadores relacionais
let a = 10;
let b = 5;

let igual = a == b;  // Igualdade: false
let diferente = a != b;  // Diferença: true
let maior = a > b;  // Maior que: true
let menor = a < b;  // Menor que: false
let maiorOuIgual = a >= b;  // Maior ou igual: true
let menorOuIgual = a <= b;  // Menor ou igual: false

// Operadores lógicos
let c = true;
let d = false;

let and = c && d;  // AND lógico: false
let or = c || d;  // OR lógico: true
let not = !c;  // NOT lógico: false

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto da divisão:", resto);

console.log("Igualdade:", igual);
console.log("Diferença:", diferente);
console.log("Maior que:", maior);
console.log("Menor que:", menor);
console.log("Maior ou igual:", maiorOuIgual);
console.log("Menor ou igual:", menorOuIgual);

console.log("AND lógico:", and);
console.log("OR lógico:", or);
console.log("NOT lógico:", not);
```
Neste exemplo, utilizamos os operadores aritméticos (`+`, `-`, `*`, `/`, `%`), operadores relacionais (`==`, `!=`, `>`, `<`, `>=`, `<=`) e operadores lógicos (`&&`, `||`, `!`) para realizar diferentes operações com os valores das variáveis.

Em seguida, utilizamos a função `console.log()` para exibir os resultados das operações no console do navegador.

Assim, este exemplo demonstra o uso dos operadores aritméticos, relacionais e lógicos com tipos primitivos em JavaScript.

## 1) VARIAVEIS SIMPLES:
````javascript
let nome = "João";
console.log(nome);  // Saída: João
````
Neste exemplo, declaramos uma variável chamada nome e atribuímos a ela o valor "João". Em seguida, usamos o método console.log() para imprimir o valor da variável nome no console. Você também pode atualizar o valor de uma variável em JavaScript. Por exemplo:
````javascript
let idade = 25;
console.log(idade);  // Saída: 25
idade = 30;
console.log(idade);  // Saída: 30
````
Neste exemplo, declaramos uma variável chamada idade e atribuímos a ela o valor 25. Em seguida, imprimimos o valor da variável idade no console. Depois, atualizamos o valor da variável idade para 30. Ao imprimir novamente o valor da variável idade, agora obtemos a saída como 30. É importante mencionar que o escopo das variáveis em JavaScript pode variar dependendo da palavra-chave usada para declará-las. A palavra-chave var possui escopo de função, enquanto let e const têm escopo de bloco. O escopo determina onde a variável é acessível e pode ser usada no código.

Em JavaScript, para obter a entrada de dados do usuário, podemos usar a função `prompt()`. Ela exibe uma caixa de diálogo onde o usuário pode digitar um valor e retornar esse valor como uma string. Aqui está um exemplo de como usar o `prompt()` para obter a entrada de dados:
```javascript
let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");

let idade = prompt("Digite sua idade:");
console.log("Sua idade é: " + idade);
```
Neste exemplo, a função `prompt()` é usada para exibir uma mensagem para o usuário e aguardar a entrada de um valor. O valor digitado pelo usuário é armazenado nas variáveis `nome` e `idade`. Em seguida, usamos a função `console.log()` para exibir as mensagens no console do navegador.

Ao executar esse código em um navegador, você verá uma caixa de diálogo solicitando que o usuário digite seu nome. Depois de digitar o nome e pressionar Enter, o nome será exibido no console. Em seguida, será solicitado que o usuário digite sua idade e, após digitar e pressionar Enter, a idade será exibida no console.

Dessa forma, o `prompt()` é uma maneira simples de obter a entrada de dados do usuário em JavaScript.

## 2) ESTRUTURA CONDICIONAL:
### ESTRUTURA IF:
````javascript
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
}
````
Neste exemplo, usamos a estrutura if para verificar se a idade é maior ou igual a 18. Se a condição for verdadeira, o código dentro do bloco de código do if é executado.

### ESTRUTURA IF-ELSE:
````javascript
let idade = 16;
if (idade >= 18) {
  console.log("Você é maior de idade.");
} 
else {
  console.log("Você é menor de idade.");
}
````
Neste exemplo, usamos a estrutura if...else para verificar se a idade é maior ou igual a 18. Se a condição for verdadeira, o código dentro do bloco de código do if é executado. Caso contrário, o código dentro do bloco de código do else é executado.

### ESTRUTURA IF-ELSE, ELSE IF:
````javascript
let nota = 75;
if (nota >= 90) {
  console.log("A");
} 
else if (nota >= 80) {
  console.log("B");
} 
else if (nota >= 70) {
  console.log("C");
} 
else {
  console.log("D");
}
````
Neste exemplo, usamos a estrutura if...else if...else para verificar o intervalo de notas e atribuir um grau correspondente. O código verifica as condições em ordem, e apenas o bloco de código correspondente à primeira condição verdadeira é executado.

### ESTRUTURA SWITCH:
````javascript
let diaDaSemana = 2;
let nomeDia;
switch (diaDaSemana) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;
  default:
    nomeDia = "Dia inválido";
}
console.log(nomeDia);
````
Neste exemplo, usamos a estrutura switch para atribuir um nome ao dia da semana com base no valor da variável diaDaSemana. O código verifica o valor e executa o bloco de código correspondente ao case correspondente. Se nenhum caso for correspondente, o bloco de código default é executado. Esses são apenas alguns exemplos das estruturas condicionais em JavaScript. Elas permitem que você tome decisões com base em condições e controle o fluxo do seu programa.

## 3) ESTRUTURA DE REPETIÇÃO:
### ESTRUTURA FOR:
````javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
````
Neste exemplo, usamos a estrutura for para iterar de 0 a 4. A expressão let i = 0 inicializa a variável i com o valor 0. A condição i < 5 define a condição de continuação do loop. Enquanto essa condição for verdadeira, o bloco de código dentro do for será executado. A expressão i++ é executada após cada iteração para atualizar o valor da variável i. Neste caso, imprimimos o valor de i no console.

### ESTRUTURA WHILE:
````javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
````
Neste exemplo, usamos a estrutura while para iterar de 0 a 4. A condição i < 5 é verificada antes de cada iteração. Enquanto essa condição for verdadeira, o bloco de código dentro do while será executado. A expressão i++ é executada após cada iteração para atualizar o valor da variável i. Aqui também imprimimos o valor de i no console.

### ESTRUTURA DO-WHILE:
````javascript
let i = 0;
do {
  console.log(i);
  i++;
} 
while (i < 5);
````
Neste exemplo, usamos a estrutura do...while para iterar de 0 a 4. O bloco de código dentro do do é executado pelo menos uma vez, e a condição i < 5 é verificada após cada iteração. Enquanto essa condição for verdadeira, o bloco de código continuará sendo executado. Novamente, imprimimos o valor de i no console. Essas são as estruturas de repetição mais comuns em JavaScript. Elas permitem que você execute um bloco de código repetidamente com base em uma condição ou um número específico de iterações.

## 4) VARIAVEIS COMPOSTAS:
### ARRAYS:
Um array é uma estrutura de dados que permite armazenar vários valores em uma única variável. Aqui está um exemplo de declaração e manipulação de um array em JavaScript:
````javascript
// Declaração de um array de números
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numeros[0]); // Saída: 1
console.log(numeros.length); // Saída: 5

// Adicionando elementos ao array
numeros.push(6);
console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

// Percorrendo o array
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
````
Neste exemplo, declaramos um array chamado numeros que contém os números de 1 a 5. Usamos a notação de colchetes [] para acessar elementos específicos do array. O método push() é usado para adicionar um elemento ao final do array. O atributo length retorna o número de elementos no array. Também mostramos como percorrer o array usando um loop for.

### OBJETOS:
Um objeto é uma estrutura de dados que permite armazenar pares de chave-valor. Aqui está um exemplo de como criar e manipular objetos em JavaScript:
````javascript
// Criação de um objeto de pessoa
let pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Engenheiro"
};

// Acessando propriedades do objeto
console.log(pessoa.nome); // Saída: João
console.log(pessoa["idade"]); // Saída: 25

// Adicionando propriedades ao objeto
pessoa.endereco = "Rua A, 123";
console.log(pessoa); // Saída: { nome: "João", idade: 25, profissao: "Engenheiro", endereco: "Rua A, 123" }
````
Neste exemplo, criamos um objeto chamado pessoa que possui três propriedades: nome, idade e profissao. Usamos a notação de ponto . e a notação de colchetes [] para acessar as propriedades do objeto. Também mostramos como adicionar uma nova propriedade ao objeto. Esses são apenas exemplos básicos de como trabalhar com variáveis compostas em JavaScript usando arrays e objetos. Essas estruturas de dados são muito versáteis e permitem organizar e manipular dados de forma eficiente.

## 5) FUNÇÕES:
Em JavaScript, as funções são blocos de código reutilizáveis que podem ser chamados para executar uma determinada tarefa. Elas permitem agrupar instruções em um único bloco, atribuir parâmetros e retornar valores. Aqui está um exemplo básico de como criar e usar funções em JavaScript:
````javascript
// Declaração de uma função simples
function saudacao() {
  console.log("Olá! Bem-vindo!");
}

// Chamando a função
saudacao(); // Saída: Olá! Bem-vindo!
````
Neste exemplo, declaramos uma função chamada saudacao que exibe uma mensagem de saudação no console. Para chamar a função e executar o código dentro dela, usamos o nome da função seguido por parênteses (). No exemplo, chamamos a função saudacao() e a mensagem "Olá! Bem-vindo!" é exibida no console. As funções também podem receber parâmetros, que são valores passados para a função durante a chamada. Aqui está um exemplo de função com parâmetros:
````javascript
// Função que soma dois números
function somar(a, b) {
  return a + b;
}

// Chamando a função e armazenando o resultado em uma variável
let resultado = somar(5, 3);
console.log(resultado); // Saída: 8
````
Neste exemplo, declaramos a função somar com dois parâmetros a e b. A função retorna a soma dos dois parâmetros. Ao chamar a função somar(5, 3), ela retorna o valor 8, que é armazenado na variável resultado. Em seguida, imprimimos o valor de resultado no console. Além disso, é possível definir funções anônimas (sem nome) e atribuí-las a variáveis ou passá-las como argumentos para outras funções. Aqui está um exemplo:
````javascript
// Função anônima atribuída a uma variável
let saudacao = function() {
  console.log("Olá! Bem-vindo!");
};

// Chamando a função
saudacao(); // Saída: Olá! Bem-vindo!
````
Neste exemplo, definimos uma função anônima e a atribuímos à variável saudacao. Em seguida, chamamos a função através da variável saudacao. Esses são apenas exemplos básicos de como criar e usar funções em JavaScript. As funções são poderosas em JavaScript e podem realizar tarefas complexas e reutilizáveis. Elas desempenham um papel fundamental no desenvolvimento de aplicativos JavaScript.

## 6) CLASS POO:
Class com todos os 4 pilares da programação orientada a objetos: encapsulamento, herança, polimorfismo e abstração:
````javascript
// Classe base: Animal
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  dormir() {
    console.log(`${this.nome} está dormindo.`);
  }
}

// Classe derivada: Cachorro (herança de Animal)
class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome} está latindo.`);
  }
}

// Classe derivada: Gato (herança de Animal)
class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  miar() {
    console.log(`${this.nome} está miando.`);
  }
}

// Criando instâncias das classes
let cachorro = new Cachorro("Max", 3, "Labrador");
let gato = new Gato("Felix", 2, "Preto");

// Utilizando os métodos e propriedades das classes
cachorro.comer(); // Saída: Max está comendo.
gato.dormir(); // Saída: Felix está dormindo.
cachorro.latir(); // Saída: Max está latindo.
gato.miar(); // Saída: Felix está miando.
````
Neste exemplo, temos uma classe base Animal que contém propriedades nome e idade, bem como os métodos comer() e dormir(). Em seguida, temos duas classes derivadas, Cachorro e Gato, que herdam da classe base Animal. Cada classe derivada adiciona suas próprias propriedades e métodos específicos, como raca e latir() para o Cachorro, e cor e miar() para o Gato. Ao criar instâncias das classes Cachorro e Gato, podemos usar os métodos e propriedades tanto da classe base quanto das classes derivadas. Por exemplo, podemos chamar os métodos comer() e dormir() da classe base, bem como os métodos latir() e miar() das classes derivadas. Essa é uma demonstração simples de como as classes em JavaScript podem aproveitar os pilares da programação orientada a objetos. No entanto, vale ressaltar que o JavaScript utiliza protótipos para implementar a herança, diferentemente das classes tradicionais encontradas em outras linguagens orientadas a objetos.

## 7) INTEGRAÇÃO COM HTML:
Em JavaScript, é possível integrar com o HTML para manipular os elementos da página, responder a eventos e fornecer interatividade. A integração ocorre por meio do uso do DOM (Document Object Model) e da manipulação dos elementos HTML por meio de scripts JavaScript. Aqui estão alguns exemplos de integração entre JavaScript e HTML:

**1. Acessando elementos HTML:** Podemos usar o JavaScript para acessar e manipular elementos HTML por meio de seus identificadores. Por exemplo, se tivermos um elemento `<p>` com o id "meuParagrafo", podemos acessá-lo usando o método `getElementById` e modificar seu conteúdo da seguinte maneira:
```javascript
let paragrafo = document.getElementById("meuParagrafo");
paragrafo.textContent = "Novo texto do parágrafo";
```

**2. Manipulando eventos:** Podemos atribuir funções JavaScript a eventos HTML para responder a ações do usuário. Por exemplo, se tivermos um botão com o id "meuBotao", podemos adicionar um evento de clique a ele usando o método `addEventListener` da seguinte maneira:

```javascript
let botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
  console.log("Botão clicado!");
});
```

**3. Modificando estilos:** Podemos usar o JavaScript para modificar estilos dos elementos HTML. Por exemplo, se tivermos um elemento `<div>` com o id "minhaDiv", podemos alterar sua cor de fundo usando a propriedade `style.backgroundColor`:

```javascript
let minhaDiv = document.getElementById("minhaDiv");
minhaDiv.style.backgroundColor = "red";
```
Esses são apenas alguns exemplos de como JavaScript pode ser integrado com HTML. Com o JavaScript, é possível realizar manipulações mais avançadas no DOM, criar animações, fazer requisições AJAX, validar formulários e muito mais. A integração entre JavaScript e HTML permite criar páginas web dinâmicas e interativas.

**FORMULÁRIOS:**

Aqui está um exemplo de um formulário básico em HTML e JavaScript:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Formulário</title>
  <style>
    .form-container {
      max-width: 400px;
      margin: 0 auto;
    }
    .form-group {
      margin-bottom: 10px;
    }
    .form-group label {
      display: block;
      margin-bottom: 5px;
    }
    .form-group input {
      width: 100%;
      padding: 5px;
    }
    .form-group button {
      padding: 5px 10px;
    }
  </style>
</head>
<body>
  <div class="form-container">
    <h2>Formulário de Contato</h2>
    <form id="contact-form">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Mensagem:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>

  <script>
    // Capturar o formulário pelo ID
    const form = document.getElementById('contact-form');

    // Adicionar um listener para o evento de submit
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o envio padrão do formulário

      // Obter os valores dos campos do formulário
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Exibir os valores no console (pode ser substituído por uma ação real de envio)
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Mensagem:', message);

      // Limpar os campos do formulário
      form.reset();
    });
  </script>
</body>
</html>
```

Neste exemplo, temos um formulário de contato simples com campos para o nome, email e mensagem. O formulário é envolvido por uma `div` com a classe `.form-container` para melhorar a aparência.

O JavaScript captura o formulário pelo ID (`contact-form`) e adiciona um listener para o evento de `submit`. Quando o formulário é enviado, o listener dispara uma função que evita o envio padrão do formulário usando `event.preventDefault()`.

Em seguida, os valores dos campos do formulário são obtidos usando os IDs correspondentes (`name`, `email`, `message`). Neste exemplo, os valores são exibidos no console, mas você pode substituir essa ação por um código para enviar os dados para um servidor, por exemplo.

Finalmente, após o processamento dos dados, o formulário é redefinido para limpar os campos usando `form.reset()`.

Esse exemplo demonstra como criar um formulário básico em HTML e usar JavaScript para capturar os dados do formulário e realizar uma ação com eles. Você pode personalizar o estilo do formulário conforme necessário e adicionar validações adicionais, se desejar.

---

# REGRAS DO JAVASCRIPT:
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
