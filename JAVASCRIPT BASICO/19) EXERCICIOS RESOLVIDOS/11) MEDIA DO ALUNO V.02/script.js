let btn = document.getElementById('btn');
btn.addEventListener('click',clicou);
let res = document.querySelector('#res');

function clicou(){
    let nome = prompt('Qual o nome do aluno?');

    let n1 = Number(prompt(`Qual sua primeira nota de ${nome}?`));

    let n2 = Number(prompt(`Qual a segunda nota de ${nome}?`));

    let media = (n1 + n2) / 2;
    
    messageFinal(nome,n1,n2,media);
}

function messageFinal(name = "",n1 = 0,n2 = 0,media = 0){

    if(media >= 6 && media <= 10){
        res.innerHTML = `<p>Calculando a média final de <mark>${name}</mark>.</p>`;

        res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`;
    
        res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`;
    
        res.innerHTML += `<p>A mensagem que temos é: <span style="color:red;"><strong> Meus parabéns!</strong></span></p>`;
    } 
    else if(media <= 6 && media >= 0){
        res.innerHTML = `<p>Calculando a média final de <mark>${name}</mark>.</p>`;

        res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`;
    
        res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`;
    
        res.innerHTML += `<p>A mensagem que temos é: <span style="color:red;"><strong> Estude um pouco mais!</strong></span></p>`;
    } 
    else {
        alert('Média inválida');
    }
}