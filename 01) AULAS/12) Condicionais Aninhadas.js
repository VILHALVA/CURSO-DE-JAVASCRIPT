//--------------- [ 1 ] CONDICINAIS ANINHADAS ------------------------------//
var idade = 12
console.log(`VOCÊ TEM ${idade} ANOS!`)

if (idade >= 18 && idade < 65) {
    console.log('O VOTO É OBRIGATÓRIO')
}

else if (idade >= 16 && idade < 18 || idade >= 65) {
    console.log('VOTO É OPCIONAL!')
}

else if (idade < 16) {
    console.log('VOCÊ NÃO PODE VOTAR!')
} 

//--------------- [ 2 ] CONDICINAIS COMPOSTAS ------------------------------//
var agora = new Date()
var hora = agora.getHours()
console.log(`AGORA SÃO ${hora} HORAS!`)

if (hora >= 6 && hora < 12) {
    console.log('BOM DIA!')
}

if (hora >= 12 && hora < 18) {
    console.log('BOA TARDE!')
}

if (hora >= 18 && hora < 23) {
    console.log('BOA NOITE!')
}

if (hora >= 0 && hora < 6) {
    console.log('VÁ DORMIR!')
}

//--------------- [ 3 ] CONDICINAIS MULTIPLAS ------------------------------//
var dia = new Date()
var diaSem = dia.getDay()
var diaNum = agora.getDate()
var diaMes = agora.getMonth()
var diaAno = agora.getFullYear()

/* 
    0 = DOMINGO
    1 = SEGUNDA-FEIRA
    2 = TERÇA-FEIRA
    3 = QUARTA-FEIRA
    4 = QUINTA-FEIRA
    5 = SEXTA-FEIRA
    6 = SABADO
*/

switch(diaSem) {
    case 0:
        console.log("HOJE É DOMINGO!")
        break
    case 1:
        console.log("HOJE É SEGUNDA-FEIRA!")
        break
    case 2:
        console.log("HOJE É TERÇA-FEIRA!")
        break
    case 3:
        console.log("HOJE É QUARTA-FEIRA!")
        break
    case 4:
        console.log("HOJE É QUINTA-FEIRA!")
        break
    case 5:
        console.log("HOJE É SEXTA-FEIRA!")
        break
    case 6:
        console.log("HOJE É SABADO!")
        break
    default:
        console.log(`ERRO: ${diaSem} É UM DIA INVÁLIDO!`)
        break
}

console.log(`DATE: ${diaNum}/${diaMes+1}/${diaAno}`)





