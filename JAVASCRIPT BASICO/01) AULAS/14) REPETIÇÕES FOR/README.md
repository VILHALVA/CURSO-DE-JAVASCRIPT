# REPETIÇÕES FOR
O loop `for` é uma estrutura de repetição em JavaScript que permite executar um bloco de código um número específico de vezes. É especialmente útil quando você sabe previamente quantas vezes deseja repetir uma ação. O `for` é uma estrutura versátil e amplamente utilizada em programação. Vamos explorar como usá-lo em JavaScript.

## Estrutura Básica do `for`

A estrutura básica de um loop `for` é a seguinte:

```javascript
for (inicialização; condição; incremento) {
    // Bloco de código a ser repetido
}
```

- `inicialização`: É onde você inicializa uma variável de controle, geralmente com um valor inicial.
- `condição`: É a expressão que é avaliada antes de cada execução do loop. Enquanto a condição for verdadeira, o loop continuará a ser executado.
- `incremento`: É onde você atualiza a variável de controle após cada execução do loop. Isso geralmente é usado para aumentar ou diminuir o valor da variável.

## Exemplo de Loop `for`

Aqui está um exemplo simples de um loop `for` que imprime números de 1 a 5:

```javascript
for (var numero = 1; numero <= 5; numero++) {
    console.log(numero);
}
```

Neste exemplo:

- Inicializamos a variável `numero` com o valor 1.
- A condição `numero <= 5` é avaliada antes de cada execução do loop. Enquanto for verdadeira, o loop continuará a ser executado.
- Após cada execução do loop, incrementamos `numero` em 1 usando `numero++`.

## Controle de Loop

Dentro de um loop `for`, assim como em outras estruturas de repetição, você pode usar `break` e `continue` para controlar o fluxo do loop.

- `break`: Encerra imediatamente o loop.

```javascript
for (var numero = 1; numero <= 10; numero++) {
    if (numero === 6) {
        break;
    }
    console.log(numero);
}
```

- `continue`: Pula a iteração atual e passa para a próxima.

```javascript
for (var numero = 1; numero <= 5; numero++) {
    if (numero === 3) {
        continue;
    }
    console.log(numero);
}
```

Neste exemplo, o loop pulará a impressão do número 3 e continuará com os números restantes.

## Conclusão

O loop `for` é uma estrutura de controle de fluxo poderosa em JavaScript, especialmente quando você sabe quantas vezes deseja repetir uma ação. É amplamente utilizado para iterar por arrays, objetos e realizar tarefas repetitivas em programação. Certifique-se de entender a estrutura do `for` e como usar `break` e `continue` para criar loops eficazes em seus programas JavaScript.