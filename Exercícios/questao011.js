/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array: */
function primeiroEUltimoElemento(elementos){
    const primeiroElemento = elementos.shift()
    const ulitimoElemento = elementos.pop()
    return [primeiroElemento, ulitimoElemento]
}
console.log(primeiroEUltimoElemento([1,2,3,4, "Misael"]))