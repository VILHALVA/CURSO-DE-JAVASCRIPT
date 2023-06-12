// Veja um exemplo de um projeto em JavaScript que usa polimorfismo de sobreposição e sobrecarga. Neste exemplo, vamos simular uma calculadora que possui diferentes métodos para executar operações matemáticas.

class Calculadora {
  somar(num1, num2) {
    return num1 + num2;
  }

  // Sobreposição do método somar para trabalhar com três números
  somar(num1, num2, num3) {
    return num1 + num2 + num3;
  }

  multiplicar(num1, num2) {
    return num1 * num2;
  }

  // Sobrecarga do método multiplicar para trabalhar com três números
  multiplicar(num1, num2, num3) {
    return num1 * num2 * num3;
  }
}

const minhaCalculadora = new Calculadora();

console.log(minhaCalculadora.somar(2, 3)); // 5
console.log(minhaCalculadora.somar(2, 3, 4)); // 9 (método sobrescrito)
console.log(minhaCalculadora.multiplicar(2, 3)); // 6
console.log(minhaCalculadora.multiplicar(2, 3, 4)); // 24 (método sobrecarregado)

/* Neste exemplo, temos uma classe `Calculadora` que possui métodos `somar` e `multiplicar`. Inicialmente, o método `somar` recebe dois números e retorna a soma deles. O método `multiplicar` recebe dois números e retorna a multiplicação deles.

Em seguida, temos uma sobreposição do método `somar` que recebe três números. Isso significa que se chamarmos o método `somar` com três argumentos, ele executará a versão sobrescrita que retorna a soma dos três números.

Também temos uma sobrecarga do método `multiplicar` que recebe três números. Isso significa que se chamarmos o método `multiplicar` com três argumentos, ele executará a versão sobrecarregada que retorna a multiplicação dos três números.

Ao criar uma instância da classe `Calculadora` e chamar os métodos `somar` e `multiplicar`, podemos ver que o polimorfismo está ocorrendo. Dependendo do número de argumentos passados para os métodos, o JavaScript selecionará automaticamente a versão correta para executar.

Isso demonstra o polimorfismo de sobreposição, onde um método é substituído em uma classe derivada com uma implementação diferente, e o polimorfismo de sobrecarga, onde um método possui várias versões com diferentes assinaturas de argumentos.*/