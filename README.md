# CURSO DE JAVASCRIPT
👨‍⚖️CURSO COMPRETO DE JAVASCRIPT.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA) 
[![GitHub Repo stars](https://img.shields.io/badge/VEJA-DOCUMENTAÇÃO-03A9F4?logo=google)](https://devdocs.io/javascript/) <br>

[![GitHub Repo stars](https://img.shields.io/badge/CURSO-COMPRETO-03A9F4?logo=youtube)](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1) <br>

<img src="https://logospng.org/download/javascript/logo-javascript-icon-256.png" align="center" width="280"> <br>

# 💥REQUESITOS:
* 🤯[SABER LÓGICA DE PROGRAMAÇÃO](https://github.com/VILHALVA/CURSO-DE-ALGORITMO)
* 🤯[SABER HTML E CSS](https://github.com/VILHALVA/CURSO-DE-HTML-CSS-JS)
* 💻[INSTALAR O NODEJS](https://nodejs.org/pt-br/download/package-manager)
* 💻[INSTALAR O VISUAL STUDIO CODE](https://code.visualstudio.com/download)

# [🕳TEMATICAS](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)
* ✅ A CAPACIDADE DA LINGUAGEM
* ✅ VARIAVEIS E TIPOS PRIMITIVOS
* ✅ TRATAMENTO DE DADOS
* ✅ OPERADORES
* ✅ USANDO O DOM
* ✅ ESTRUTURAS CONDICIONAIS COMPOSTAS
* ✅ ESTRUTURAS CONDICIONAIS ANINHADAS
* ✅ REPETIÇÕES WHILE
* ✅ REPETIÇÕES FOR
* ✅ VARIAVEIS COMPOSTAS
* ✅ FUNÇÕES
* ✅ OBJETOS

![](https://i.imgur.com/waxVImv.png)
# 👀VISÃO PANORÂMICA:
| PERGUNTA | RESPOSTA |
| :---: | :---: |
| DATA DE CRIAÇÃO | 1995 |
| NOME DO CRIADOR | Brendan Eich | 
| SIGNIFICADO DO NOME | O nome "JavaScript" foi escolhido pela Netscape por razões de marketing, aproveitando o sucesso e popularidade da linguagem Java na época. |
| É BASEADA NO | C C++ |
| EXTENÇÃO DO ARQUIVO | .js |
| É MAIS USADA | Desenvolvimento web (FrontEnd) |

* O JavaScript foi criado por Brendan Eich em 1995, quando ele era um engenheiro da Netscape Communications Corporation. A linguagem foi inicialmente chamada de "Mocha" e posteriormente renomeada para "LiveScript" antes de adotar o nome "JavaScript".
* O nome "JavaScript" foi escolhido pela Netscape por razões de marketing, aproveitando o sucesso e popularidade da linguagem Java na época. No entanto, o JavaScript e o Java são linguagens distintas, com sintaxes e propósitos diferentes.
* O JavaScript é uma linguagem de programação de alto nível, dinâmica e orientada a objetos. Ela foi criada originalmente para adicionar recursos interativos aos navegadores web e permitir a criação de conteúdo dinâmico nas páginas da web.
* O JavaScript é amplamente usado no desenvolvimento web, principalmente para criar interatividade e funcionalidades dinâmicas nas páginas da web. Com o surgimento de tecnologias como o Node.js, o JavaScript também é utilizado para desenvolver aplicativos de servidor e aplicativos de linha de comando.
* Além do desenvolvimento web, o JavaScript tem sido usado em outras áreas, como desenvolvimento de jogos, aplicativos móveis híbridos, aplicações de desktop com ferramentas como o Electron, desenvolvimento de extensões de navegador e até mesmo para criação de scripts automatizados.
* O JavaScript também é a base para muitos frameworks e bibliotecas populares, como React, Angular e Vue.js, que são amplamente utilizados para desenvolvimento web moderno.
* A sintaxe do JavaScript foi influenciada por várias linguagens de programação, mas sua estrutura básica é derivada da linguagem de programação C, assim como muitas outras linguagens modernas. A sintaxe do JavaScript também possui semelhanças com a linguagem de programação Java, embora as duas linguagens sejam diferentes em suas características e propósitos.
* Embora o JavaScript compartilhe algumas semelhanças com o C e o Java em termos de sintaxe, ele possui recursos únicos e específicos, como manipulação de eventos, manipulação do DOM (Document Object Model) e recursos assíncronos. Esses recursos tornam o JavaScript uma linguagem poderosa e flexível para o desenvolvimento de aplicativos web interativos.
* É importante notar que, embora o nome "JavaScript" possa sugerir uma relação próxima com a linguagem de programação Java, as duas são linguagens independentes com propósitos e características diferentes. O JavaScript é uma linguagem interpretada e dinamicamente tipada, enquanto o Java é uma linguagem compilada e estaticamente tipada.
* Em resumo, o JavaScript foi criado por Brendan Eich e é uma linguagem de programação amplamente usada no desenvolvimento web. Ela fornece recursos interativos e dinâmicos às páginas da web e é utilizada para desenvolver uma variedade de aplicativos, desde websites interativos até aplicativos móveis, jogos e muito mais.

# 🤳SINTAXE DA LINGUAGEM:
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

## 2) ESTRUTURA CONDICIONAL:
### 1) ESTRUTURA IF:
````javascript
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
}
````
Neste exemplo, usamos a estrutura if para verificar se a idade é maior ou igual a 18. Se a condição for verdadeira, o código dentro do bloco de código do if é executado.

### 2) ESTRUTURA IF-ELSE:
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

### 3) ESTRUTURA IF-ELSE, ELSE IF:
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

### 4) ESTRUTURA SWITCH:
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
### 1) ESTRUTURA FOR:
````javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
````
Neste exemplo, usamos a estrutura for para iterar de 0 a 4. A expressão let i = 0 inicializa a variável i com o valor 0. A condição i < 5 define a condição de continuação do loop. Enquanto essa condição for verdadeira, o bloco de código dentro do for será executado. A expressão i++ é executada após cada iteração para atualizar o valor da variável i. Neste caso, imprimimos o valor de i no console.

### 2) ESTRUTURA WHILE:
````javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
````
Neste exemplo, usamos a estrutura while para iterar de 0 a 4. A condição i < 5 é verificada antes de cada iteração. Enquanto essa condição for verdadeira, o bloco de código dentro do while será executado. A expressão i++ é executada após cada iteração para atualizar o valor da variável i. Aqui também imprimimos o valor de i no console.

### 3) ESTRUTURA DO WHILE:
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
### 1) ARRAYS:
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

### 2) OBJETOS:
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

# 💖CARACTERISTICAS DA LINGUAGEM:
## ❤POSITIVAS:
* **1 - Sintaxe Simples:** A sintaxe do JavaScript é relativamente simples e fácil de aprender. Ela é baseada em grande parte na sintaxe do C, o que facilita a transição para desenvolvedores que já estão familiarizados com outras linguagens como C++, Java ou C#.
* **2 - Linguagem Interpretada:** O JavaScript é uma linguagem interpretada, o que significa que não requer um processo de compilação antes da execução. Isso torna o desenvolvimento mais rápido, pois você pode fazer alterações no código e ver os resultados imediatamente.
* **3 - Suporte a Programação Orientada a Objetos:** Embora o JavaScript seja uma linguagem de programação multiparadigma, ele suporta programação orientada a objetos. Você pode criar classes, herdar propriedades e métodos, usar polimorfismo e encapsulamento, entre outros conceitos de OOP.
* **4 - Tipagem Dinâmica:** O JavaScript possui tipagem dinâmica, o que significa que as variáveis não têm um tipo fixo. Você pode atribuir diferentes tipos de valores a uma variável ao longo do tempo. Isso oferece flexibilidade e simplifica o desenvolvimento em certos cenários, pois você não precisa declarar explicitamente o tipo de variável.
* **5 - Manipulação de DOM:** O JavaScript é amplamente utilizado para manipular o Document Object Model (DOM) de uma página web. Isso permite interagir com elementos HTML, modificar seu conteúdo, estilo e comportamento dinamicamente, respondendo a eventos do usuário, como cliques ou rolagens.
* **6 - Suporte a Assíncrono:** O JavaScript é projetado para lidar com operações assíncronas de forma eficiente, como chamadas de API, manipulação de eventos e operações de I/O. Ele possui recursos embutidos, como callbacks, Promises e async/await, que facilitam a escrita de código assíncrono de forma mais clara e legível.
* **7 - Grande Ecossistema:** O JavaScript possui uma comunidade de desenvolvedores ativa e um vasto ecossistema de bibliotecas e frameworks, como React, Angular e Vue.js, que tornam o desenvolvimento web mais produtivo e poderoso.
* **8 - Execução no Navegador:** O JavaScript é a linguagem padrão para programação no navegador. Isso significa que qualquer dispositivo com um navegador moderno é capaz de executar código JavaScript, permitindo a criação de aplicações web interativas e responsivas.

## 🖤NEGATIVAS:
* **1 - Tipagem Fraca:** Enquanto a tipagem dinâmica do JavaScript pode ser uma vantagem em certos aspectos, também pode ser uma fonte de erros difíceis de detectar. Como as variáveis não possuem um tipo fixo, é possível realizar operações inesperadas em tempo de execução, o que pode resultar em erros difíceis de rastrear e depurar.
* **2 - Compatibilidade entre Navegadores:** Embora o JavaScript seja executado em todos os navegadores modernos, pode haver diferenças de compatibilidade entre as implementações do JavaScript em cada navegador. Isso pode levar a problemas de compatibilidade e requerer ajustes no código para garantir que ele funcione corretamente em diferentes navegadores.
* **3 - Gerenciamento de Escopo:** O JavaScript possui regras complexas para o escopo de variáveis e o gerenciamento de contexto. Isso pode levar a situações em que variáveis não têm o escopo desejado ou o contexto do this não é o esperado, o que pode ser confuso e levar a erros.
* **4 - Segurança:** Como o JavaScript é executado no lado do cliente, em um ambiente não confiável, há riscos de segurança associados. Os desenvolvedores devem estar cientes de práticas de segurança e evitar vulnerabilidades, como ataques de injeção de código ou acesso não autorizado a dados sensíveis.
* **5 - Código Assíncrono Complexo:** Embora o JavaScript possua recursos para lidar com operações assíncronas, como callbacks, Promises e async/await, a manipulação de código assíncrono complexo pode se tornar difícil de ler e entender. O aninhamento excessivo de callbacks, por exemplo, pode levar a um padrão conhecido como "callback hell" (inferno de callbacks), que pode tornar o código complexo e difícil de manter.
* **6 - Escalabilidade e Manutenção:** À medida que os projetos em JavaScript crescem, pode se tornar desafiador manter um código bem estruturado e modular. A falta de um sistema de tipos estático pode dificultar a detecção de erros antes da execução e aumentar a carga de trabalho de testes e depuração.
* **7 - Lentidão em Operações Intensivas:** O JavaScript pode ser menos eficiente em operações intensivas de CPU em comparação com outras linguagens, devido à sua natureza interpretada e à otimização limitada do mecanismo de execução em alguns cenários. No entanto, o JavaScript é frequentemente usado em conjunto com outras tecnologias para superar essa limitação.

