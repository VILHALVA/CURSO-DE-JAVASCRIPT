const res = document.getElementById('res');

function converter(){
    let celsius = Number(prompt('Digite uma temperatura em °C (Celsius)'));
     resultSet(celsius);
}

function resultSet(value){
    let celsius = Number(value);
    let kelvin = Number(value + 273.15);
    let fahrenheit = Number((value * (9/5)) + 32);

    res.innerHTML = `<h2>A temperatura de ${celsius.toLocaleString({style:'decimal'})}°C, corresponde a...</h2>`;

    res.innerHTML += `<p>${kelvin.toLocaleString({style:'decimal'})}°K (Kelvin)</p>`;

    res.innerHTML += `<p>${fahrenheit.toLocaleString({style:'decimal'})}°F (Fahrenheit)</p>`;
}