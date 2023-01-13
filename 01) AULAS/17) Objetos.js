let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: '85.4', 
    engordar(p=0){
        console.log('ENGORDOU!')
        this.peso += p
    }
}

console.log(amigo)
console.log(amigo.nome)
console.log(amigo.sexo)
console.log(amigo.peso)
console.log(typeof amigo)

amigo.engordar(2)

console.log(`O ${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso}`)