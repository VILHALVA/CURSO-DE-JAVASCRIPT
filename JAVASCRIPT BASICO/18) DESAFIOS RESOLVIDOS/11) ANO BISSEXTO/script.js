const res = document.getElementById('res');

function verificar(){
    let txtAno = prompt('Qual é o ano que você quer verificar?');

    let ano = Number(txtAno);

    if(txtAno.length == 0){
        alert('Digite um ano antes de clicar no verificar.')
    } else if(ano < 0 || ano > 0){
        ano = Math.abs(ano);
        resultSet(ano);
    } else {
        alert('ERRO, você digitou um valor inválido, tente novamente.');
    }
}

function resultSet(year){

    res.innerHTML = `<h2>Analisando o ano de ${year}...</h2>`;

    if(year % 4 == 0){
        res.innerHTML += `<p>O ano de ${year} <mark style = "background-color: #aef9b0";><strong style = "color: #288728;">É BISSEXTO</strong></mark> ✔️</p>`;
    } else {
        res.innerHTML += `<p>O ano de ${year} <mark style = "background-color: #e06d6d;"><strong style = "color: #720404;">NÃO É BISSEXTO</strong></mark> ❌</p>`;
    }
}