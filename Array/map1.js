// o MAP serve para fazer uma transformação em um ARRAY. Mapear um ARRAY para um outro ARRAY do mesmo tamanho, mas com os dados transformados.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
// FOR com propósito
let resultado = numeros.map(function (e) {
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paradinheiro = e => `R$${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = numeros.map(soma10).map(triplo).map(paradinheiro)
console.log(resultado)