function parimpa(n) {
    if (n % 2 == 0) {
        return `O VALOR ${n} É PAR!`
    }
    else {
        return `O VALOR ${n} É IMPAR!`
    }
}

let res = parimpa(11)
console.log(res)

console.log(parimpa(22))
console.log(parimpa(51))
console.log(parimpa(54))
console.log(parimpa(99))
console.log(parimpa(12))


function soma(n1=0,n2=0) {
    return `A soma entre ${n1} + ${n2} = ${n1+n2}`
}

console.log(soma(2,5))
console.log(soma(12,5))
console.log(soma(22,45))
console.log(soma(32,8))
console.log(soma(50,50))
console.log(soma(2))


let valor = function(x) {
    return `O Valor ${x} em Dobro é ${x*2}`
}

console.log(valor(2))
console.log(valor(10))
console.log(valor(30))
console.log(valor(60))
console.log(valor(80))
console.log(valor(100))


function factorial(num) {
    let fat = 1
    for(let c = num; c > 1; c--) {
        fat *= c 
    }
    return `O Factorial de ${num} é ${fat}`
}

console.log(factorial(5))
console.log(factorial(8))
console.log(factorial(10))
console.log(factorial(2))
console.log(factorial(15))
console.log(factorial(20))


function fatorial(n) {    //< RECURSIVIDADE: USO A FUNÇÃO DENTRO DELA. //
    if (n == 1) {
        return 1
    }
    else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))