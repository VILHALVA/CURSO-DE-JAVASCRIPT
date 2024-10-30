function enter(){
    let produto = prompt('Qual produto você está comprando?');

    let preco = Number(prompt(`Quanto custa ${produto} que você está comprando?`));

    let quantiaDada = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`));

    let troco = (quantiaDada - preco);

    if(troco > 0){
     alert(`Você comprou ${produto} que custou ${preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.\nDeu ${quantiaDada.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} de troco.\nVolte Sempre!`);
    } else if(troco < 0){
     alert(`Você comprou ${produto} que custou ${preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.\nDeu ${quantiaDada.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} em dinheiro e ainda deve ${Math.abs(troco).toLocaleString('pt-br',{style:'currency',currency:'BRL'})} para pagar totalmente o produto.\nVolte Sempre!`);
    } else {
     alert(`Você comprou ${produto} que custou ${preco.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.\nDeu ${quantiaDada.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} em dinheiro e não recebe troco.\nPague logo!`);
    }
 }