/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

vetor = [-12, -5, -4, -3, -2, -1, 13, 14, 15, 16, 17, 18, 19, 20]

function percorrerVetor(vetor) {
    let negativos = 0
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }
    }
    return `A quantidade de números negativos é ${negativos}.`
}
console.log(percorrerVetor(vetor))