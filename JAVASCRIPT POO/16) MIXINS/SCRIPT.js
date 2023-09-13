// Definindo um mixin
let carroMixin = {
    acelerar() {
        console.log("Acelerando...");
    },
    frear() {
        console.log("Freando...");
    }
};

// Objeto alvo
let meuCarro = {};

// Aplicando o mixin ao objeto alvo
Object.assign(meuCarro, carroMixin);

// Agora, 'meuCarro' possui os métodos 'acelerar' e 'frear'
meuCarro.acelerar(); // "Acelerando..."
meuCarro.frear(); // "Freando..."
