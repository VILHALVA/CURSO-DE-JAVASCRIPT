function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO: Seus dados são invalidos!')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'HOMEM'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', '../MIDIAS/mbebe.jpg')
            }
            else if (idade >= 5 && idade < 12) {
                img.setAttribute('src', '../MIDIAS/mcrianca.jpg')
            }
            else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', '../MIDIAS/mjovem.jpg')
            }
            else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', '../MIDIAS/madulto.jpg')
            }
            else {
                img.setAttribute('src', '../MIDIAS/mvelho.jpg')
            }
        }
        else {
            gênero = 'MULHER'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', '../MIDIAS/fbebe.jpg')
            }
            else if (idade >= 5 && idade < 12) {
                img.setAttribute('src', '../MIDIAS/fcrianca.jpg')
            }
            else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', '../MIDIAS/fjovem.jpg')
            }
            else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', '../MIDIAS/fadulta.jpg')
            }
            else {
                img.setAttribute('src', '../MIDIAS/fvelha.jpg')
            }
        }
        res.innerHTML = `VOCÊ É ${gênero} COM ${idade} ANOS!`
        res.appendChild(img)
    }
}