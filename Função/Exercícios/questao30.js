/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

Array.min = function(array){
  return Math.min.apply(Math, array)
}

Array.max = function(array){
  return Math.max.apply(Math, array)
}
console.log(Array.min(vetor))
console.log(Array.max(vetor))