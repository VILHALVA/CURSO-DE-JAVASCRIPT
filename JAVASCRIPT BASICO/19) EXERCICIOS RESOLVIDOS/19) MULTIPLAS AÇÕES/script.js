let res = document.getElementById('res');

function enter(){
    let n1 = Number(prompt('Primeiro valor:'));
    let n2 = Number(prompt('Segundo valor:'));

    let escolha = Number(prompt(`Valores informados ${n1} e ${n2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`));

    res.innerHTML = '<h2>Calculando...</h2>';

    if(!escolhaCerta(escolha)){
        res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou uma opção que não existe dentre as disponíveis. Tente novamente.`;
    } 
    else {
        calculo(n1,n2,escolha);
    }

}

function escolhaCerta(x){
    if(x >= 1 && x <= 4){
        return true;
    } 
    else {
        return false;
    }
}

function calculo(n1=0,n2=0,escolha=0){
    switch(escolha){
        case 1:
            let soma = (n1 + n2);
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${soma}</strong></p>`;
        break;
        case 2:
            let sub = (n1 - n2);
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${sub}</strong></p>`;
        break;
        case 3:
            let mult = (n1 * n2);
            res.innerHTML += `<p>${n1} * ${n2} = <strong>${mult}</strong></p>`;
        break;
        case 4:
            let div = (n1 / n2);
            if(div != Infinity){
            res.innerHTML += `<p>${n1} / ${n2} = <strong>${div}</strong></p>`;
            } else {
            res.innerHTML += `<p>${n1} / ${n2} = <strong>Número</strong> ♾️</p>`;                
            }
        break;
    }
}
