class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}
const p1 = new Pessoa("Misael")
p1.falar()

const criarPessoa = nome => {
    return {
        falar:() => console.log(`Meu nome é ${nome}.`)
    }
}
const p2 = criarPessoa("Misael")
p2.falar()