const res = document.getElementById('res');

function calcular(){
    let a = Number(prompt('Qual é o valor de a?'));
    let b = Number(prompt('Qual é o valor de b?'));
    let c = Number(prompt('Qual é o valor de c?'));

    resultDelta(a,b,c);
}

function resultDelta(a=0,b=0,c=0){

    let delta = ((b**2) - 4 * a * c);

    res.innerHTML = '<h2>Resolvendo Bhaskara</h2>';

    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`;

    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`;

    res.innerHTML += `<p>O valor calculado foi <mark><strong>&Delta; = ${delta}</strong></mark></p>`;
}