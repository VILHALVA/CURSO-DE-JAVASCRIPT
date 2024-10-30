const res = document.getElementById('res');

function reajuste(){
    let nomeFuncionario = prompt('Qual é o nome do funcionário?');

    let salário = Number(prompt(`Qual é o salário de ${nomeFuncionario}?`));

    let porcentagem = Number(prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?`));

     result(nomeFuncionario,salário,porcentagem);
}

function result(funcionario,salario,porcentagem){
         let reajuste = salario * (porcentagem/100);
         let newSal = salario + reajuste;

         res.innerHTML = `<h2>${funcionario} recebeu um aumento salarial!</h2>`;

         res.innerHTML += `<p>O salário atual é ${salario.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.</p>`;

         res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${reajuste.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} no próximo mês.</p>`;

         res.innerHTML += `<p>E a partir daí, ${funcionario} vai passar a ganhar ${newSal.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</p>`;
    }