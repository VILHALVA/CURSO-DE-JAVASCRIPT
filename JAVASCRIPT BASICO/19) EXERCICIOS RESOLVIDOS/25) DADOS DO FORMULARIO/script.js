let num = document.getElementById('num');

const res = document.getElementById('res');

function contar(){
    let number = Number(num.value);

    if(!isPositive()){

        alert('Valores negativos não são permitidos aqui, meu garoto.');

        num.value = '';
        num.focus();

    } 
    else if(num.value.length == 0) {
        
        alert('Insira um número inteiro antes de começar.')
    
    } 
    else {    

    res.innerHTML += `<h2>Contando de 0 até ${number}</h2>`;

    for(let i = 0; i <= number; i++){
        res.innerHTML += `${i}&#x1F449`;
    }
        res.innerHTML += '&#x1F3C1';
    }

}

function isPositive(){
    if(num.value >= 0){
        return true;
    } 
    else {
        return false;
    }
}