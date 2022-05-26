/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function paresImpares(vetorNumeros) {
    let qtdePares = 0
    let qtdeImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdePares++
        } else {
            qtdeImpares++
        }
    }
    return `${qtdePares} números pares e ${qtdeImpares} números ímpares.`
}


console.log(paresImpares(vetor))