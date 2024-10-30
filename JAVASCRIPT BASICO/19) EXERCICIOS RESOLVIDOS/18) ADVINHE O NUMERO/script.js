const res = document.getElementById('res');
const btn = document.getElementById('btn');
const image = document.createElement('img');
const numeroSorteado = Number.parseInt(1 + (Math.random()) * (100 - 1));

image.setAttribute('src','foto.png');
image.setAttribute('alt','image');

function enter(){

    let n = Number(prompt('Qual é o seu palpite?'));
    
    if(n >= 0 && n <= 100){
        resultadoSorteio(n);
    } 
    else {
        alert('ERRO, válido somente números entre 1 e 100.');
    } 
}

function resultadoSorteio(n){
    if(numeroSorteado > n){
        res.innerHTML += `<p>Você falou ${n}. Meu número é <strong>MAIOR!</strong></p>`;
    } 
    else if(numeroSorteado < n){
        res.innerHTML += `<p>Você falou ${n}. Meu número é <strong>MENOR!</strong></p>`;
    } 
    else {
        
        res.appendChild(image);
        res.style.transitionDuration = '1s';

        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numeroSorteado}!</p>`;

        btn.style.display = 'none';
    }
}