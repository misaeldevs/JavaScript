/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/
function numerosInteirosPositivos(n1, n2) {
    let resultado = 0
    if (n1 < 0 || n2 < 0) {
        return `Permitido apenas números inteiros POSITIVOS.`
    } else
        for (i = 1; i <= n1; i++) {
            resultado += n2
        }
    return resultado
}
console.log(numerosInteirosPositivos(2, 3))