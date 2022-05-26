/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

let palavraA = "Marta"
let palavraB = "Danilo"

function verificarIdentidade(palavraA, palavraB) {

    if (palavraA === palavraB) {
        return true
    } else
        return false
}
console.log(verificarIdentidade(palavraA, palavraB))