const res = document.getElementById('res');

function verificar() {
                let pAntigo = Number(prompt('Qual era o preço anterior do produto?'));
                
                let pAtual = Number(prompt('Qual é o preço atual do produto?'));

                if((pAntigo <= 0 || pAntigo >= 0) && (pAtual <= 0 || pAtual >= 0)){

                    pAntigo = Math.abs(pAntigo);
                    pAtual = Math.abs(pAtual);

                    resultSet(pAntigo,pAtual);
                } else {
                    alert('[ERRO], você digitou um valor inválido, tente novamente.');
                }
}

function resultSet(oldValue,newValue){
                let antigo = Number(oldValue);
                let novo = Number(newValue);

                res.innerHTML = '<h2>Analisando os valores informados</h2>';

                res.innerHTML += `<p>O produto custava ${antigo.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} e agora custa ${novo.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.</p>`;


                if(novo > antigo){
                    res.innerHTML += '<p>Hoje o produto está mais caro.</p>';
                    
                    res.innerHTML += `<p>O preço subiu ${(novo-antigo).toLocaleString('pt-br',{style:'currency',currency:'BRL'})} em relação ao preço anterior.</p>`;

                    res.innerHTML += `<p>Uma variação de ${((novo/antigo - 1)*100).toLocaleString({style:'decimal'})}% pra cima.</p>`;

                } else if(novo < antigo){

                    res.innerHTML += '<p>Hoje o produto está mais barato.</p>';
                    
                    res.innerHTML += `<p>O preço caiu ${(antigo-novo).toLocaleString('pt-br',{style:'currency',currency:'BRL'})} em relação ao preço anterior.</p>`;

                    res.innerHTML += `<p>Uma variação de ${((antigo/novo - 1)*100).toLocaleString({style:'decimal'})}% pra baixo.</p>`;

                } else {

                    res.innerHTML += '<p>Hoje o produto continua o mesmo valor.</p>';
                    
                    res.innerHTML += `<p>O preço continua sendo ${(antigo).toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.</p>`;

                    res.innerHTML += `<p>Não houve variação.</p>`;

                }

}