document.addEventListener('DOMContentLoaded', function() {
    let num = document.querySelector('input#fnum');
    let lista = document.querySelector('select#flista');
    let res = document.querySelector('div#res');
    let valores = [];

    function isNumero(n) {
        return Number(n) >= 1 && Number(n) <= 100;
    }

    function inLista(n, l) {
        return l.indexOf(Number(n)) !== -1;
    }

    function adicionar() {
        if (isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value));
            let item = document.createElement('option');
            item.text = `O VALOR ${num.value} FOI ADICIONADO!`;
            lista.appendChild(item);
            res.innerHTML = '';
        } 
        else {
            window.alert("ERRO: VALOR INVÁLIDO OU REPETIDO!");
        }
        num.value = '';
        num.focus();
    }

    function finalizar() {
        if (valores.length === 0) {
            window.alert("ADICIONE VALORES!");
        } 
        else {
            let tot = valores.length;
            let maior = valores[0];
            let menor = valores[0];
            let soma = 0;
            let media = 0;
            for (let pos in valores) {
                soma += valores[pos];
                if (valores[pos] > maior) {
                    maior = valores[pos];
                }
                if (valores[pos] < menor) {
                    menor = valores[pos];
                }
            }
            media = soma / tot;
            res.innerHTML = '';
            res.innerHTML += `<p>AO TODO TEMOS ${tot} VALORES!</p>`;
            res.innerHTML += `<p>O MAIOR VALOR É ${maior}.</p>`;
            res.innerHTML += `<p>O MENOR VALOR É ${menor}.</p>`;
            res.innerHTML += `<p>A SOMA DOS VALORES É ${soma}.</p>`;
            res.innerHTML += `<p>A MÉDIA DOS VALORES É ${media.toFixed(2)}.</p>`;
        }
    }

    document.querySelector('#adicionar').addEventListener('click', adicionar);
    document.querySelector('#finalizar').addEventListener('click', finalizar);
});
