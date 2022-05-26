/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function numero(n){
    let simbolo = ""
    for(i= 0; i < n; i++){
        simbolo += "+"
    }
    return simbolo
}
console.log(numero(8))