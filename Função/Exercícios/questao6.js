/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function montanteJuroSimples(capitalInicial, taxaJuros, tempoAplicacao){
    return montanteJuroSimples = capitalInicial + capitalInicial * taxaJuros * tempoAplicacao
}
console.log(montanteJuroSimples(1050, 0.15, 5))

console.log("=====================================================================================================")

function montanteJuroComposto(capitalInicial, taxaJuros, tempoAplicacao){
    return montanteJuroComposto = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}
console.log(montanteJuroComposto(1050, 0.15, 5))