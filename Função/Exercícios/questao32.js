/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function mediaAritmetica(vetor) {
    let soma = 0
    for (i in vetor) {
        soma += vetor[i]

    }
 return (soma / 20)
}
console.log(mediaAritmetica(vetor))