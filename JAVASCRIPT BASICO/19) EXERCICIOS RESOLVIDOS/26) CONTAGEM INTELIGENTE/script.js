let inicio = document.getElementById('numInicio');
let fim = document.getElementById('numFinal');
const res = document.getElementById('res');

function contar(){

    if(isEmpty()){

        alert('ERRO, preencha todos os campos antes de clicar no botão.');

    } 
    else {

    let start = Number(inicio.value);
    let finish = Number(fim.value);

    res.innerHTML += `<h2>Contando de ${start} até ${finish}</h2>`;

    if(start < finish){

        for(start; start <= finish; start++){
            res.innerHTML += `${start}&#x1F449`;
        }
            res.innerHTML += '&#x1F3C1';

    } 
    else if(start > finish){

        for(start; start >= finish; start--){
            res.innerHTML += `${start}&#x1F449`;
        }
            res.innerHTML += '&#x1F3C1';

    } 
    else {
        res.innerHTML += 'Não é possível contar, pois os números são iguais &#x1F3C1';
    }
}
}

function isEmpty(){
    if(inicio.value == '' || fim.value == ''){
        return true;
    } 
    else {
        return false;
    }
}