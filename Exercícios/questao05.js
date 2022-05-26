/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings. */

function compararNumeros(n1, n2) {
    if (n1 > n2) {
        return `O número ${n1} é maior que o número ${n2}.`
    } else if (n1 === n2) {
        return `O número ${n1} é igual ao número ${n2}.`
    } else if (n1 < n2) {
        return `O número ${n1} é menor que o número ${n2}.`
    } else {
        return `O número ${n1} é diferente do número ${n2}.`
    }
}
console.log(compararNumeros(2, "2"))

function maiorIgual(numero1, numero2) {
    if (typeof numero1 != numero2) {
        return false
    } else if (numero >= numero2) {
        return true
    }
}
console.log(maiorIgual(2, 5))