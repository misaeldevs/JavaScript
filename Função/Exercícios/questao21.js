/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function calcularValorPlano(intervalo){
    const valor = 100
    switch(intervalo){
        case 1: return `O valor do plano de saúde para a idade informada é de ${valor + 80}.`
        case 2: return `O valor do plano de saúde para a idade informada é de ${valor + 50}.`
        case 3: return `O valor do plano de saúde para a idade informada é de ${valor + 95}.`
        case 4: return `O valor do plano de saúde para a idade informada é de ${valor + 130}.`
        default: return `Idade inexistente.`
    }
}
console.log(calcularValorPlano(0))