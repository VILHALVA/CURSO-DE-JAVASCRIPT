# MANUAL
## JAVASCRIPT BASICO:
Assim como em [HTML e CSS](https://github.com/VILHALVA/CURSO-DE-HTML-E-CSS), no curso de JavaScript que estamos oferecendo, não é necessário instalar nenhum software adicional para começar a escrever e testar seu código. Vamos focar em executar JavaScript no front-end, ou seja, diretamente no navegador. 

Para rodar seu primeiro código em JavaScript diretamente no navegador, você só precisa de um navegador moderno (como Chrome, Firefox ou Edge) e um editor de texto simples. Vamos fazer isso em duas abordagens: diretamente no console do navegador e criando um arquivo HTML simples.

### MÉTODO 1: USANDO O CONSOLE DO NAVEGADOR:
1. **Abra o navegador** e, em qualquer página, pressione `F12` ou `Ctrl + Shift + J` (no Windows/Linux) ou `Cmd + Option + J` (no macOS) para abrir as ferramentas de desenvolvedor.
   
2. **Navegue até a aba "Console"**.

3. **Digite um código JavaScript simples** no console. Vamos usar `console.log("Hello, world!")` para começar:

    ```javascript
    console.log("Hello, world!")
    ```

4. **Pressione "Enter"** para rodar o código. Você verá `Hello, world!` aparecendo no console.

Esse método é ótimo para testar pequenos trechos de código rapidamente e entender o comportamento do JavaScript.

### MÉTODO 2: CRIANDO UM ARQUIVO HTML SIMPLES COM JAVASCRIPT:
Para scripts mais complexos ou se você quer que o código JavaScript interaja com a página, é recomendável criar um arquivo HTML.

1. **Crie um novo arquivo** com o nome `index.html` no seu editor de texto preferido (como o Visual Studio Code ou Sublime Text).

2. **Escreva o código HTML básico** com um trecho de JavaScript. Copie e cole o seguinte código:

    ```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Primeiro Código JS</title>
    </head>
    <body>
        <h1>Olá, mundo!</h1>

        <script>
            // Aqui vai o seu código JavaScript
            console.log("Hello, world!");
            alert("Este é seu primeiro código em JavaScript!");
        </script>
    </body>
    </html>
    ```

3. **Salve o arquivo** e abra-o no navegador (você pode fazer isso clicando com o botão direito no arquivo e escolhendo “Abrir com” > Navegador, ou simplesmente arrastando o arquivo para o navegador).

4. Quando a página carregar, você verá a mensagem `"Hello, world!"` no console (que pode ser aberto com `F12`) e uma caixa de alerta com a mensagem `"Este é seu primeiro código em JavaScript!"`.

### EXPLICAÇÃO DO CÓDIGO:
- A tag `<script>` dentro do HTML é usada para incluir JavaScript. Todo código JavaScript que você escrever entre `<script>` e `</script>` será executado assim que a página carregar.
- `console.log()` imprime uma mensagem no console do navegador.
- `alert()` exibe uma caixa de diálogo simples no navegador.

Esses métodos são ideais para começar a experimentar JavaScript e entender como ele interage com páginas HTML diretamente no navegador!

## JAVASCRIPT POO:
Para aqueles que desejam se aprofundar mais no JavaScript, especialmente no back-end e em programação orientada a objetos, temos cursos avançados que utilizam [Node.js](https://github.com/VILHALVA/CURSO-DE-NODEJS).

Para rodar seu primeiro código em JavaScript com Node.js, você precisa instalar o Node.js, configurá-lo e criar um projeto inicial. O Node.js permite executar JavaScript diretamente no servidor ou em seu computador, fora do navegador.

### PASSO 1: INSTALANDO O NODE.JS:
1. **Baixe o instalador do Node.js**:
   - Acesse o [site oficial do Node.js](https://nodejs.org).
   - Baixe a versão recomendada para o seu sistema operacional (Windows, macOS ou Linux).

2. **Instale o Node.js**:
   - Siga as instruções do instalador. Na maioria dos casos, basta avançar sem alterar as opções padrão.

3. **Verifique a instalação**:
   - Abra o terminal (ou Prompt de Comando, no Windows).
   - Digite o seguinte comando para verificar se o Node.js foi instalado corretamente:

     ```bash
     node -v
     ```

     - Esse comando deve mostrar a versão instalada do Node.js (algo como `v18.12.0`), indicando que a instalação foi concluída com sucesso.
   - Em seguida, digite para verificar o NPM (gerenciador de pacotes do Node):

     ```bash
     npm -v
     ```

     - Isso mostrará a versão do npm, que é instalado automaticamente com o Node.js.

### PASSO 2: CRIANDO SEU PRIMEIRO PROJETO:
Agora que o Node.js está instalado, vamos criar um projeto simples.

1. **Crie uma pasta para o projeto**:
   - No terminal, navegue até o diretório onde deseja criar o projeto. Depois, crie uma nova pasta chamada `meu_primeiro_projeto_node`.

     ```bash
     mkdir meu_primeiro_projeto_node
     cd meu_primeiro_projeto_node
     ```

2. **Inicialize o projeto com `npm init`**:
   - Digite o comando abaixo para criar o arquivo `package.json`, que é essencial em projetos Node.js para gerenciar dependências e scripts.

     ```bash
     npm init -y
     ```

     - A opção `-y` configura o projeto com as configurações padrão.
     - Esse comando cria o arquivo `package.json`, onde as informações do projeto e as dependências serão armazenadas.

### PASSO 3: CRIANDO O ARQUIVO JAVASCRIPT:
1. **Crie um arquivo chamado `app.js`**:
   - Na pasta do projeto, crie um arquivo com o nome `app.js`. Esse será o arquivo principal onde você escreverá seu código JavaScript.

2. **Escreva seu primeiro código em Node.js**:
   - Abra `app.js` no seu editor de código preferido (como o Visual Studio Code) e adicione o seguinte código:

     ```javascript
     // app.js
     console.log("Hello, Node.js!");
     ```

3. **Execute o código**:
   - No terminal, ainda na pasta do projeto, execute o seguinte comando:

     ```bash
     node app.js
     ```

   - Isso deve exibir `Hello, Node.js!` no terminal.

### EXPLICAÇÃO DO CÓDIGO:
- `console.log("Hello, Node.js!");` imprime a mensagem no console, assim como no navegador, mas neste caso o console é o terminal do seu sistema.
- Ao usar o comando `node app.js`, o Node.js interpreta e executa o código JavaScript diretamente, sem precisar de um navegador.

### PRÓXIMOS PASSOS:
Agora que você criou e executou seu primeiro projeto, você pode:
- **Instalar pacotes** usando `npm install <nome_do_pacote>` para adicionar novas funcionalidades.
- **Criar scripts** no `package.json` para automatizar tarefas (como testes, compilações e execuções).
  
Com isso, você já tem uma base para explorar o mundo do desenvolvimento com Node.js!

## CONCLUSÃO:
Para o curso atual de JavaScript focado no front-end, você só precisa de um navegador e um editor de texto para começar. Já nos cursos avançados de JavaScript POO e Node.js, utilizaremos Node.js para explorar funcionalidades mais avançadas e o desenvolvimento no back-end.
