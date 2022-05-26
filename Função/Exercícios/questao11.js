/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false */



function validarAno(limite) {
    let multiplo4 = 0
    for (i = 0; i < limite; i++) {
        return multiplo4 += i
    }
}

function anoBissexto(validarAno) {
    if (validarAno % 4 === 0){ // && (validarAno % 100 != 0) || (validarAno % 400 == 0)) {
        return true
    } else {
        return false
    }
}

console.log(anoBissexto(2022))