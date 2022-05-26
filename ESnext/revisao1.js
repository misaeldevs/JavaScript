// let e const
// O "var" tem escopo de função e escopo global enquanto o "let" tem escopo de bloco.
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Misael', idade: 39 }
console.log(idade, nome)