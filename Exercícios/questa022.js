/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/

function num1_10(numero){
   let numeroAleatorio = Math.floor(Math.random() * 11)
    if(numero === numeroAleatorio){
        return `Parabéns! O número sorteado foi o ${numero}.`
    } else{
        return `Que pena! O número sorteado foi o número ${numeroAleatorio} e você informou o número ${numero}.`
    }
}
console.log(num1_10(8))