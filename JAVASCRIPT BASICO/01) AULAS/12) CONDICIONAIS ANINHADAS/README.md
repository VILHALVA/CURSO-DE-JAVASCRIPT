# CONDICIONAIS ANINHADAS
As condicionais aninhadas, também conhecidas como condicionais dentro de condicionais, são usadas quando você precisa avaliar múltiplas condições de forma hierárquica e tomar decisões com base em várias situações diferentes. Isso permite criar fluxos de controle mais complexos em seu programa. As condicionais aninhadas são implementadas com instruções `if` dentro de outras instruções `if`, `else if` ou `else`. Vamos explorar como funcionam as condicionais aninhadas em JavaScript.

## Estrutura Básica de uma Condicional Aninhada

A estrutura básica de uma condicional aninhada em JavaScript é a seguinte:

```javascript
if (condicao1) {
    // Bloco de código a ser executado se a condicao1 for verdadeira

    if (condicao2) {
        // Bloco de código a ser executado se a condicao2 também for verdadeira
    } else {
        // Bloco de código a ser executado se a condicao1 for verdadeira, mas a condicao2 for falsa
    }
} else {
    // Bloco de código a ser executado se a condicao1 for falsa
}
```

- A primeira condicional (`if`) verifica a primeira condição (`condicao1`).
- Se a `condicao1` for verdadeira, você pode aninhar outra condicional (`if`) dentro dela para verificar uma segunda condição (`condicao2`).
- Se a `condicao2` também for verdadeira, o bloco de código associado a ela será executado.
- Se a `condicao2` for falsa, você pode definir um bloco de código alternativo usando `else` para lidar com essa situação.
- Se a `condicao1` for falsa, o bloco de código associado ao primeiro `else` será executado.

Lembre-se de que você pode adicionar quantas condicionais aninhadas forem necessárias para lidar com as diferentes situações em seu programa.

## Exemplo de Condicional Aninhada

Aqui está um exemplo prático de uma condicional aninhada:

```javascript
var nota = 75;

if (nota >= 70) {
    console.log("Aprovado");

    if (nota >= 90) {
        console.log("Excelente desempenho!");
    } else if (nota >= 80) {
        console.log("Bom desempenho!");
    } else {
        console.log("Desempenho satisfatório.");
    }
} else {
    console.log("Reprovado");
}
```

Neste exemplo:

- A primeira condicional verifica se a `nota` é maior ou igual a 70. Se for verdadeira, você entra em uma condicional aninhada.
- Dentro da condicional aninhada, verificamos diferentes faixas de notas e exibimos mensagens com base na pontuação da nota.

## Aninhamento de Mais de Duas Condições

Você pode aninhar condicionais quantas vezes forem necessárias para lidar com cenários complexos. Por exemplo:

```javascript
if (condicao1) {
    // Bloco de código para condicao1

    if (condicao2) {
        // Bloco de código para condicao1 e condicao2

        if (condicao3) {
            // Bloco de código para condicao1, condicao2 e condicao3
        } else {
            // Bloco de código para condicao1, condicao2 (verdadeira) e condicao3 (falsa)
        }
    } else {
        // Bloco de código para condicao1 (verdadeira) e condicao2 (falsa)
    }
} else {
    // Bloco de código para condicao1 (falsa)
}
```

## Conclusão

As condicionais aninhadas são uma ferramenta poderosa para lidar com lógica condicional complexa em JavaScript. Elas permitem que você crie estruturas de controle de fluxo detalhadas para atender a diversas situações em seus programas. Ao usá-las com sabedoria, você pode escrever código mais legível e eficaz para resolver problemas complexos em seus aplicativos.