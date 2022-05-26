/*Criar uma função que receba um array de números e retorne o menor número desse array.*/

const menorNumero = ([5, 90, 56, 15, 574, 156, 65453])

function verificarMenorNumero(numeros) {
    let menor = numeros[0]
    for (let i in numeros) {
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
        return menor
    }
    
}
console.log(verificarMenorNumero(menorNumero))

/*function verificarMenorNumero(numeros) {
    let menor = numeros[0]
    for (let i in numeros)
        if (numeros[i] < menor)
            menor = numeros[i]
    return menor
}
console.log(verificarMenorNumero(menorNumero))*/