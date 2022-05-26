/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

function filtrarNumeros(array) {
    const resultado = []
    for (let item of array) {
        if (typeof item === "number") {
            resultado.push(item)
        }
    }
    return resultado
}
console.log(filtrarNumeros([1, 2, 3, 4, "Misael", true, "Danilo"]))