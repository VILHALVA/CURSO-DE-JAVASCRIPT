# Propriedades de Objetos
Em JavaScript, as propriedades de objetos são pares chave-valor que representam informações ou dados relacionados a esse objeto. Abaixo, você encontrará informações detalhadas sobre as propriedades de objetos em JavaScript:

## 1. **Criando Propriedades**
Você pode criar propriedades em um objeto de várias maneiras:
### a. Notação de Ponto:
```javascript
let pessoa = {};
pessoa.nome = "João";
pessoa.idade = 30;
```

### b. Notação de Colchetes:
```javascript
let pessoa = {};
pessoa["nome"] = "João";
pessoa["idade"] = 30;
```

### c. Notação de Objeto Literal:
```javascript
let pessoa = {
    nome: "João",
    idade: 30
};
```

## 2. **Acessando Propriedades**
Você pode acessar o valor de uma propriedade usando a notação de ponto ou a notação de colchetes:

```javascript
console.log(pessoa.nome); // "João"
console.log(pessoa["idade"]); // 30
```

## 3. **Verificando a Existência de Propriedades**
Para verificar se uma propriedade existe em um objeto, você pode usar o operador `in`:

```javascript
if ("nome" in pessoa) {
    console.log("A propriedade 'nome' existe no objeto pessoa.");
}
```

## 4. **Enumerando Propriedades**
Você pode percorrer todas as propriedades de um objeto usando um loop `for...in`:

```javascript
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
```

## 5. **Deletando Propriedades**
Você pode excluir uma propriedade de um objeto usando o operador `delete`:

```javascript
delete pessoa.idade;
```

## 6. **Propriedades Computadas**
A notação de colchetes permite criar propriedades com nomes calculados dinamicamente:

```javascript
let prop = "nome";
pessoa[prop] = "Maria";
console.log(pessoa.nome); // "Maria"
```

## 7. **Propriedades de Objeto Getters e Setters**
Você pode definir getters e setters para controlar o acesso e a modificação das propriedades de um objeto:

```javascript
let pessoa = {
    _nome: "João",
    get nome() {
        return this._nome;
    },
    set nome(novoNome) {
        this._nome = novoNome;
    }
};

console.log(pessoa.nome); // "João"
pessoa.nome = "Maria";
console.log(pessoa.nome); // "Maria"
```

## 8. **Propriedades de Objeto Predefinidas (Built-in Properties)**
Os objetos incorporados, como `Object`, têm propriedades predefinidas que podem ser usadas para várias operações:

```javascript
let propriedades = Object.getOwnPropertyNames(pessoa);
console.log(propriedades); // ["nome", "_nome"]
```

## 9. **Propriedades de Objeto Personalizadas**
Você pode adicionar suas próprias propriedades personalizadas a um objeto para armazenar informações específicas ao seu programa:

```javascript
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

carro.cor = "Azul";
```

## 10. **Propriedades de Objeto e Herança**
As propriedades de objetos podem ser herdadas por meio de protótipos. Isso permite que objetos compartilhem propriedades comuns:

```javascript
function Pessoa(nome) {
    this.nome = nome;
}

Pessoa.prototype.cumprimentar = function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
};

let pessoa = new Pessoa("João");
pessoa.cumprimentar(); // "Olá, meu nome é João."
```

Esses são os conceitos fundamentais relacionados às propriedades de objetos em JavaScript. Propriedades de objetos são usadas para armazenar e acessar informações relacionadas a objetos, tornando-os uma parte essencial da linguagem JavaScript.