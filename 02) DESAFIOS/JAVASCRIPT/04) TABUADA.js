function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert("\u{1F4DB}ERRO! FALTAM DADOS!")
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}