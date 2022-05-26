/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */
function nomeMes(numero){
    switch(numero){
        case 1: return `O mês informado é JANEIRO.`
    }
    switch(numero){
        case 2: return `O mês informado é FEVEREIRO.`
    }
    switch(numero){
        case 3: return `O mês informado é MARÇO.`
    }
    switch(numero){
        case 4: return `O mês informado é ABRIL.`
    }
    switch(numero){
        case 5: return `O mês informado é MAIO.`
    }
    switch(numero){
        case 6: return `O mês informado é JUNHO.`
    }
    switch(numero){
        case 7: return `O mês informado é JULHO.`
    }
    switch(numero){
        case 8: return `O mês informado é AGOSTO.`
    }
    switch(numero){
        case 9: return `O mês informado é SETEMBRO.`
    }
    switch(numero){
        case 10: return `O mês informado é OUTUBRO.`
    }
    switch(numero){
        case 11: return `O mês informado é NOVEMBRO.`
    }
    switch(numero){
        case 12: return `O mês informado é DEZEMBRO.`
    }
}
console.log(nomeMes(10))