/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas.*/
const letra = ("a")
const nome = ("Misael")

function contarCaractere(caractere, palavra) {
    let contador = 0
    for (i = 0; i < palavra.length; i++){
        if(palavra.charAt(i) === caractere){
            contador++
        }
    }
        return contador
}
console.log(contarCaractere(letra, nome))