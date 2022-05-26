/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calcular(a, operacao, b) {

    switch (operacao) {
        case "+": return `A operação selecionada foi a de soma e retorna o valor ${a + b}.`
        case "-": return `A operação selecionada foi a de subtração e retorna o valor ${a - b}.`
        case "*": return `A operação selecionada foi a de multiplicação e retorna o valor ${a * b}.`
        case "/": return `A operação selecionada foi a de divisão e retorna o valor ${a / b}.`
        case "%": return `A operação selecionada foi a de módulo e retorna o valor ${a % b}.`
    }
}
    console.log(calcular(2, "%", 3))