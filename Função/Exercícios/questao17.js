/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function calcularAumento(salarioAtual, plano) {
    switch (plano) {
        case "A": return `O salário do funcionário é de ${salarioAtual}, o qual, com um aumento de 10%, passará a ser de ${salarioAtual + (salarioAtual * 0.1)}.`
        case "B": return `O salário do funcionário é de ${salarioAtual}, o qual, com um aumento de 15%, passará a ser de ${salarioAtual + (salarioAtual * 0.15)}.`
        case "C": return `O salário do funcionário é de ${salarioAtual}, o qual, com um aumento de 20%, passará a ser de ${salarioAtual + (salarioAtual * 0.2)}.`
        default: return `O plano ${plano} é um plano INVÁLIDO.`
    }
}
console.log(calcularAumento(1000, "D"))