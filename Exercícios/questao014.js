/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento: */

function objetoParaArray(a){
    const resultado = []
    for(let chave in a){
        resultado.push([chave, a[chave]])
    }
    return resultado
}

    
console.log(objetoParaArray({nome: "Misael", profissao: "Desenvolvedor de Software"}))