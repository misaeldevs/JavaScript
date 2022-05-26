/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function validarDia(numeroDia) {
    if (numeroDia < 1 || numeroDia > 7) {
        return `Você informou o dia ${numeroDia} e esse número não compreende o número de dias de uma semana. Por favor, retorne um número de 1 a 7.`
    } else {
        switch (numeroDia) {
            case 1: return `O dia informado foi o dia ${numeroDia} e é um Domingo de fim de semana.`
            case 2: return `O dia informado foi o dia ${numeroDia} e é uma Segunda-feira, dia útil.`
            case 3: return `O dia informado foi o dia ${numeroDia} e é uma Terça-feira, dia útil.`
            case 4: return `O dia informado foi o dia ${numeroDia} e é uma Quarta-feira, dia útil.`
            case 5: return `O dia informado foi o dia ${numeroDia} e é uma Quinta-feira, dia útil.`
            case 6: return `O dia informado foi o dia ${numeroDia} e é uma Sexta-feira, dia útil.`
            case 7: return `O dia informado foi o dia ${numeroDia} e é uma Sábado de fim de semana.`
        }
    }
}
console.log(validarDia(0))