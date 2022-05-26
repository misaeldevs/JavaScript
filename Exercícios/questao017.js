/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/
function somaNumeros(array) {
    let soma = 0
    //numeros.forEach(numero => soma += numero)
for(let item of array){
    soma += item
}
    return soma
}
console.log(somaNumeros([1, 2, 3, 4, 5]))