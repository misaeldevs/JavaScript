/*12) Faça um algoritmo que calcule o fatorial de um número.
 
function valorFatorial() {
    var resultado = fatorial
    for (i = 1; i < fat; i++) {
        console.log(resultado *= i)
    }
}
valorFatorial(8)*/

function numeroFatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * numeroFatorial(numero - 1)
    }
}

console.log(numeroFatorial(5))

// 4*(4-3)* (4-2)*(4-1)
// 4*1*2*3