const res = document.getElementById('res');
function converter(){

    let cotacao = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')); 

    let dinheiro = Number(prompt('Quantos R$ você tem na carteira?'));

    let dolares = (dinheiro / cotacao);

     res.innerHTML = `<p>Com ${dinheiro.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} você consegue comprar ${dolares.toLocaleString('en',{style:'currency',currency:'USD'}).replace('.',',')}</p>`;            
}