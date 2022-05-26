/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */
const valor = 150
const taxaJuros = 0.05

function valorAnuidade(mes){
    switch(mes){
        case 1: return `O valor a ser pago é de R$${valor.toFixed(2)}.`
        case 2: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 1).toFixed(2)}.`
        case 3: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 2).toFixed(2)}.`
        case 4: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 3).toFixed(2)}.`
        case 5: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 4).toFixed(2)}.`
        case 6: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 5).toFixed(2)}.`
        case 7: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 6).toFixed(2)}.`
        case 8: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 7).toFixed(2)}.`
        case 9: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 8).toFixed(2)}.`
        case 10: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 9).toFixed(2)}.`
        case 11: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 10).toFixed(2)}.`
        case 12: return `O valor a ser pago é de R$${(valor * (1 + taxaJuros) ** 11).toFixed(2)}.`
    }
}
console.log(valorAnuidade(12))