const res = document.getElementById('res');

function converter(){
     let x = Number(prompt('Digite uma distância em metros(m)'));
     resultSet(x);
}

function resultSet(value){
     let x = Number(value);
     res.innerHTML = `<h2>A distância de ${x.toFixed(2).replace('.',',')} metros, corresponde a...</h2>`;

     res.innerHTML += `<p>${(x/1000).toFixed(3).replace('.',',')} quilômetros (Km)</p>`;

     res.innerHTML += `<p>${(x/100).toFixed(3).replace('.',',')} hectômetros (Hm)</p>`;

     res.innerHTML += `<p>${(x/10).toFixed(3).replace('.',',')} decâmetros (Dam)</p>`;

     res.innerHTML += `<p>${(x*10).toLocaleString({style:'decimal'})} decímetros (dm)</p>`;

     res.innerHTML += `<p>${(x*100).toLocaleString({style:'decimal'})} centímetros (cm)</p>`;

     res.innerHTML += `<p>${(x*1000).toLocaleString({style:'decimal'})} milímetros (mm)</p>`;
}