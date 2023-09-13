function ContaBancaria(nome, saldoInicial) {
    // Membros privados
    let nomeTitular = nome;
    let saldo = saldoInicial;

    // Método privilegiado com acesso aos membros privados
    this.getSaldo = function() {
        return saldo;
    };

    this.depositar = function(valor) {
        saldo += valor;
    };

    this.sacar = function(valor) {
        if (valor <= saldo) {
            saldo -= valor;
        } 
        else {
            console.log("Saldo insuficiente.");
        }
    };
}

let minhaConta = new ContaBancaria("João", 1000);

console.log(minhaConta.getSaldo()); // 1000
minhaConta.depositar(500);
console.log(minhaConta.getSaldo()); // 1500
minhaConta.sacar(200);
console.log(minhaConta.getSaldo()); // 1300
