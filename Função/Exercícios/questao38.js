/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

//vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function inicioFim(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }

    for (i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
inicioFim(19, 3)