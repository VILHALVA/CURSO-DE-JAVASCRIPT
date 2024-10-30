function enter(){
    let n1 = Number(prompt('Digite um número inteiro qualquer:'));

    alert(`Antes de ${n1}, temos o número ${--n1}. \nDepois de ${++n1}, temos o número ${++n1}.`);
}