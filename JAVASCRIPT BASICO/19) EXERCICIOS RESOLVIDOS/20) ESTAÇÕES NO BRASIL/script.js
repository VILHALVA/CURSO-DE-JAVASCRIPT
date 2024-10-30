const meses = addMeses();
const res = document.getElementById('res');

function clicou(){
    let mes = prompt('Digite um mês em extenso (ex: Setembro)').toUpperCase();

    estacoesDoAno(mes);
}

function addMeses(){
        let array = new Array(12);
        array[0] = 'JANEIRO';
        array[1] = 'FEVEREIRO';
        array[2] = 'MARÇO';
        array[3] = 'ABRIL';
        array[4] = 'MAIO';
        array[5] = 'JUNHO';
        array[6] = 'JULHO';
        array[7] = 'AGOSTO';
        array[8] = 'SETEMBRO';
        array[9] = 'OUTUBRO';
        array[10] = 'NOVEMBRO';
        array[11] = 'DEZEMBRO';

        return array;
}

function estacoesDoAno(month){
        let data = new Date();
        let dia = data.getDate();
        let mes;

        for(let i of meses){
            if(month === i){
                mes = (meses.indexOf(month) + 1);
                break;
            } 
            else {
                continue;
            }
        }

        if(mes >= 1 && mes <= 3){
            res.innerHTML = `<p>No mês de <mark>${month}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark>.</p>`;
        } 
        else if(mes >= 4 && mes <= 6) {
            res.innerHTML = `<p>No mês de <mark>${month}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark>.</p>`;
        } 
        else if(mes >=7 && mes <= 9){
            res.innerHTML = `<p>No mês de <mark>${month}</mark>, estamos na estação <mark><strong>VERÃO</strong></mark>.</p>`;
        } 
        else if(mes >= 10 && mes <= 12){
            res.innerHTML = `<p>No mês de <mark>${month}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark>.</p>`;
        } 
        else {
            res.innerHTML = `<p>No mês de <mark>${month}</mark>, estamos na estação <mark><strong>INDEFINIDA</strong></mark>.</p>`;
        }
}