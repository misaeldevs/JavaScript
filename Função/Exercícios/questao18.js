/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function getRandomArbitrary() {
    return Math.ceil(Math.random() * (10 - 1) + 1)
}


function lerNumero() {
    let numeroGerado = getRandomArbitrary()
    switch (numeroGerado) {
        case 1: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "UM".`
        case 2: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "DOIS".`
        case 3: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "TRÊS".`
        case 4: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "QUATRO".`
        case 5: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "CINCO".`
        case 6: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "SEIS".`
        case 7: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "SETE".`
        case 8: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "OITO".`
        case 9: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "NOVE".`
        case 10: return `O número informado foi o número ${numeroGerado}, o qual, escrito por extenso é "DEZ".`
        default: return `Número fora do intervalo.`
    }
}

console.log(lerNumero())