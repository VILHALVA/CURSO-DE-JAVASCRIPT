let num = [5, 7, 9, 2, 6]
num[5] = 3
num.push(4) //< Adicionar 100 ao último indice. //

num.sort() //< Coloca os números em ordem Crescente. Mudando índice de cada Elemento. Para funcionar, ele precisa vir abaixo do vetor. //
num.push(1)

console.log(num)
console.log(`Temos ${num.length} Elementos no vetor! Até ${num.length-1} no INDICE!`)

console.log(`Nosso Vetor é ${num}`)
console.log(`O indice 0 é ${num[0]}`)
console.log(`O indice 1 é ${num[1]}`)
console.log(`O indice 2 é ${num[2]}`)
console.log(`O indice 3 é ${num[3]}`)
console.log(`O indice 4 é ${num[4]}`)
console.log(`O indice 5 é ${num[5]}`)

num.indexOf(7) //< Buscar o valor 7 em qualquer índice. //
console.log(`O número 5 está no índice ${num.indexOf(5)}`)
console.log(`O número 7 está no índice ${num.indexOf(7)}`)
console.log(`O número 9 está no índice ${num.indexOf(9)}`)
console.log(`O número 2 está no índice ${num.indexOf(2)}`)
console.log(`O número 6 está no índice ${num.indexOf(6)}`)

let poz = num.indexOf(9)
if (poz == -1) {
    console.log("O valor 9 não foi encontrado!")
}
else {
    console.log(`O 9 foi encontrado na posição ${poz}`)
}

for(let pos=0; pos < num.length; pos++) {
    console.log(`O INDICE ${pos} TEM O ELEMENTO ${num[pos]}`)
}

for(pos in num) {
    console.log(`A CHAVE ${pos} TEM O ELEMENTO NUM ${num[pos]}`)
}
