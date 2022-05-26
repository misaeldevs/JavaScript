/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

const codigoAluno = 2021001569
const nota1 = 10
const nota2 = 8
const nota3 = 5
const calcularMediaPonderada = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
const MediaPonderada = calcularMediaPonderada
console.log(MediaPonderada)

function situacaoAluno(MediaPonderada) {
    if (MediaPonderada >= 5){
        return `O aluno sob o código ${codigoAluno} possui as notas ${nota1}, ${nota2} e ${nota3} e média ponderada ${MediaPonderada}, portanto, o aluno em questão está APROVADO!`
} else {
    return `O aluno sob o código ${codigoAluno} possui as notas ${nota1}, ${nota2} e ${nota3} e média ponderada ${MediaPonderada}, portanto, o aluno em questão está REPROVADO!`
}  
}
console.log(situacaoAluno(MediaPonderada))

