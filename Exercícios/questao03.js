/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos. */
function salarioLiquidoMensal(qtdeHorasMes, valorHora){
    return qtdeHorasMes * valorHora * (1 - 0.30)
}

console.log(salarioLiquidoMensal(160, 10))