# CONFIGURANDO VISIBILIDADE EM CLASSES 
Em JavaScript, a visibilidade de atributos e métodos de uma classe é gerenciada de forma diferente em comparação com algumas outras linguagens de programação, como Java ou C#. JavaScript não possui modificadores de acesso como `public`, `private` ou `protected`. Em vez disso, a visibilidade é baseada principalmente em convenções de nomenclatura e em alguns recursos introduzidos recentemente na linguagem, como campos privados de classe.

## Convenções de Nomenclatura
Uma convenção comum em JavaScript é usar um sublinhado `_` como prefixo para indicar que um atributo ou método é privado e não deve ser acessado diretamente fora da classe. No entanto, observe que essa é apenas uma convenção e não impede o acesso direto.

```javascript
class MinhaClasse {
    constructor() {
        this._atributoPrivado = 10;
    }

    _metodoPrivado() {
        console.log("Este é um método privado.");
    }

    metodoPublico() {
        console.log("Este é um método público.");
    }
}
```

Neste exemplo, `_atributoPrivado` e `_metodoPrivado` são considerados privados, mas ainda podem ser acessados diretamente se alguém escolher fazê-lo. Portanto, é importante seguir a convenção de nomenclatura para indicar a intenção de privacidade, mas não há garantia de que eles permaneçam privados.

## Campos Privados de Classe (ES6+)
A partir do ECMAScript 2022 (ES12), você pode usar campos privados de classe para garantir maior encapsulamento e privacidade em suas classes JavaScript. Os campos privados de classe são declarados com um `#` antes do nome do campo.

```javascript
class MinhaClasse {
    #atributoPrivado = 10;

    #metodoPrivado() {
        console.log("Este é um método privado.");
    }

    metodoPublico() {
        console.log("Este é um método público.");
    }
}
```

Com campos privados de classe, você pode ter certeza de que os atributos são realmente privados e não podem ser acessados fora da classe.

```javascript
const objeto = new MinhaClasse();
console.log(objeto.#atributoPrivado); // Isso resultará em um erro
objeto.#metodoPrivado(); // Isso resultará em um erro
objeto.metodoPublico(); // Isso é permitido
```

Observe que os campos privados de classe são uma adição mais recente à linguagem JavaScript e podem não ser suportados em todos os navegadores e ambientes. Portanto, verifique a compatibilidade antes de usá-los em seu projeto.

## Conclusão
Em JavaScript, a visibilidade de atributos e métodos é geralmente gerenciada por convenções de nomenclatura e, mais recentemente, por campos privados de classe. É importante seguir as convenções e usar campos privados, se possível, para garantir a encapsulação e a privacidade em suas classes JavaScript.