const res = document.getElementById('res');
function aplicar(){
    let produto = prompt('Qual é o produto que você está comprando?');

    let preco = Number(prompt(`Qual é o preço de ${produto}?`));

    desc10porcent(produto,preco);
}
function desc10porcent(produto,preco){
    let valor = Number(preco);
    let desconto = (valor * 0.1);
    let valorFinal = valor - desconto;   

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`;

    res.innerHTML += `<p>O preço original era ${valor.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.</p>`;

    res.innerHTML += `Você acaba de ganhar ${desconto.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} de desconto (-10%).`;

    res.innerHTML += `<p>No fim, você vai pagar ${valorFinal.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} no produto ${produto}.</p>`;
}