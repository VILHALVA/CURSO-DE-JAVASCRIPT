# REPETIÇÕES WHILE
A estrutura de repetição `while` em JavaScript permite que você execute um bloco de código repetidamente enquanto uma condição específica for verdadeira. Isso é útil quando você deseja executar uma ação várias vezes até que uma determinada condição seja satisfeita. Vamos explorar como usar o `while` em JavaScript.

## Estrutura Básica do `while`

A estrutura básica de um loop `while` é a seguinte:

```javascript
while (condicao) {
    // Bloco de código a ser repetido enquanto a condicao for verdadeira
}
```

- `condicao` é uma expressão que é avaliada antes de cada execução do loop.
- O bloco de código dentro do `while` é repetido enquanto a `condicao` for verdadeira.
- Se a `condicao` for falsa na primeira avaliação, o bloco de código nunca será executado.

## Exemplo de Loop `while`

Aqui está um exemplo simples de um loop `while` que imprime números de 1 a 5:

```javascript
var numero = 1;

while (numero <= 5) {
    console.log(numero);
    numero++;
}
```

Neste exemplo:

- Inicializamos a variável `numero` com o valor 1.
- O loop `while` verifica se `numero` é menor ou igual a 5.
- Enquanto a condição for verdadeira, o bloco de código dentro do loop será executado, imprimindo o valor de `numero` e, em seguida, incrementando `numero` em 1.
- O loop continuará até que `numero` seja maior do que 5, momento em que a condição se tornará falsa e o loop será encerrado.

## Controle de Loop

Dentro de um loop `while`, você pode usar estruturas de controle, como `break` e `continue`, para alterar o comportamento do loop.

- `break`: Encerra imediatamente o loop, independentemente da condição.

```javascript
var numero = 1;

while (true) {
    console.log(numero);
    numero++;
    if (numero > 5) {
        break;
    }
}
```

- `continue`: Pula a iteração atual do loop e passa para a próxima iteração.

```javascript
var numero = 1;

while (numero <= 5) {
    if (numero === 3) {
        numero++;
        continue;
    }
    console.log(numero);
    numero++;
}
```

Neste exemplo, o loop irá pular a impressão do número 3 e continuar com os números restantes.

## Conclusão

O loop `while` é uma estrutura de controle de fluxo importante em JavaScript que permite que você execute um bloco de código enquanto uma condição específica for verdadeira. É útil quando você precisa repetir uma ação até que uma condição seja atendida. Certifique-se de ter cuidado ao usar loops `while` para evitar loops infinitos, onde a condição nunca se torna falsa.