function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "\u{1F4DB}IMPOSSÍVEL CONTAR!"
        window.alert("\u{1F4DB}ERRO! FALTAM DADOS!")
    }
    else {
        res.innerHTML = "\u{1F530}CONTANDO: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert("\u{1F530}PASSO INVÁLIDO! CONSIDERANDO COMO PASSO 1!")
            p += 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F51C} ${c} `
            }
        }
        else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F51C} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}