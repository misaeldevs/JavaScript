/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/
function arrayNumerosPares(pares) {
    const numerosPares = []
    for (let item of pares) {
        if (item % 2 === 0) {
            numerosPares.push(item)
        }
    }
    return numerosPares
}
console.log(arrayNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))