function criarPessoa(nome) {
    return {
        nome
    }
}
console.log(criarPessoa("Misael"))
console.log(criarPessoa("Danilo"))
console.log(criarPessoa("Marcelo"))
console.log(criarPessoa("Cleane"))
console.log(criarPessoa("Douglas"))
console.log(criarPessoa("Lourenyze"))
console.log(criarPessoa("Geferson"))

console.log("===================================")

function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}.`)
    }
}
const p1 = new Pessoa("Misael")
p1.falar()
const p2 = new Pessoa("Danilo")
p2.falar()
const p3 = new Pessoa("Marcelo")
p3.falar()
const p4 = new Pessoa("Cleane")
p4.falar()
const p5 = new Pessoa("Lourenyze")
p5.falar()
const p6 = new Pessoa("Geferson")
p6.falar()
const p7 = new Pessoa("Douglas")
p7.falar()

console.log("===================================")
//Arrow Function
const criarPessoa2 = nome =>{
    return{
        falar:() => console.log(`Meu nome é ${nome}.`)
    }
}
const p8 = criarPessoa2("Misael")
p8.falar()