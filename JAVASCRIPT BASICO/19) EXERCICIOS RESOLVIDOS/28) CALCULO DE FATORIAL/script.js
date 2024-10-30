let number = document.getElementById('num');
const res = document.getElementById('res');

function calcular(){
    if(isEmpty()){
        alert('ERRO, preencha a caixa antes de clicar no botão.');
    } 
    else {

    let n = Number(number.value);
    let i = 1;
    let fat = fatorial(n);

    res.innerHTML += `<h2>Calculando ${n}!</h2>`;
    
    for(n; n >= i; n--){
        if(n != 1){
            res.innerHTML += `${n} x `;
        } 
        else {
            res.innerHTML += `${n} `;       
        }  
    }
        res.innerHTML += `= <strong>${fat}</strong>`;

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

function fatorial(value){
    let fatorial = 1;
    let i = 1;

    for(value; value >= i; value--){
        fatorial *= value;
    }

    return fatorial;
}