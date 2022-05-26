// pessoa -> 123 {...}
const pessoa = { nome: "João" }
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: "Ana"}

Object.freeze(pessoa) // Congela o objeto impedindo sua alteração.
pessoa.nome = "Marta"
pessoa.endereco = "Avenida Francisco José da Fonseca"
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:"Misael"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)