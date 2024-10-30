let number = document.getElementById('num');
const res = document.getElementById('res');

function calcular(){
    if (isEmpty()){
        alert('ERRO, preencha o campo vazio antes de clicar no botão.')
    }  
    else {
    let n = Number(number.value);
    let escolha = Number(prompt('[1] soma \n[2] subtração \n[3] multiplicação \n[4] divisão \nQual das operações você deseja visualizar a tabuada?'));

    res.innerHTML = `<h2>Tabuada de ${n}</h2>`;

    escolhaTabuada(escolha,n);
    }
}

function isEmpty(){
    if(number.value == ''){
        return true;
    } 
    else {
        return false;
    }
}

function escolhaTabuada(choice,value){
    let i = 0;
    switch(choice){
        case 1:
            for(i; i <= 10;i++){
                res.innerHTML += `<p>${value} + ${i} = <strong>${value + i}</strong></p>`;   
            }
        break;
        case 2:
            for(i; i <= 10;i++){
                res.innerHTML += `<p>${value} - ${i} = <strong>${value - i}</strong></p>`;   
            }
        break;
        case 3:
            for(i; i <= 10;i++){
                res.innerHTML += `<p>${value} * ${i} = <strong>${value * i}</strong></p>`;   
            }
        break;
        case 4:
            for(i; i <= 10;i++){
                res.innerHTML += `<p>${value} / ${i} = <strong>${value / i}</strong></p>`;   
            }
        break;
    }
}