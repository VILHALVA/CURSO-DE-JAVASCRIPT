function carregar() {
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `AGORA SÃO ${hora}:${minutos}`

    if (hora >= 0 && hora < 12) {
        MANHA.style.display = 'block'
        TARDE.style.display = 'none'
        NOITE.style.display = 'none'
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora < 18) {
        MANHA.style.display = 'none'
        TARDE.style.display = 'block'
        NOITE.style.display = 'none'
        document.body.style.background = '#b9846f'
    }

    else {
        MANHA.style.display = 'none'
        TARDE.style.display = 'none'
        NOITE.style.display = 'block'
        document.body.style.background = '#515154'
    }
}