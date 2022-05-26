/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function crescimentoCriancas(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    if (altura1 === altura2) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            return `A criança 1 mede ${altura1}, tendo a mesma altura da criança 2, que mede ${altura2} e ultrapassará esta em 1 ano.`
        } else if (taxaCrescimento1 < taxaCrescimento2) {
            return `A criança 2 mede ${altura2}, tendo a mesma altura da criança 1, que mede ${altura1} e ultrapassará esta em 1 ano.`
        } else {
            return `As crianças têm as mesmas alturas e taxas de crescimento.`
        }
    } if (altura1 > altura2) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            return `A criança 1 mede ${altura1} e a criança 2, que mede ${altura2} não ultrapassará a criança 1.`
        } else if (taxaCrescimento1 < taxaCrescimento2) {
            return `A criança 1 mede ${altura1}, sendo menor que a criança 2, que mede ${altura1}, porém a crinça 2 ultrapassará a crianca 1 em ${calcularTempo(altura1, taxaCrescimento1, altura2, taxaCrescimento2)} anos.`
        } else {
            return `As crianças têm alturas e taxas de crescimento difentes.`
        }
    } else {
        return `A criança 1 mede ${altura1}, sendo menor que a criança 2, que mede ${altura2}.`
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let qtdeAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdeAnos++
    }
    return qtdeAnos
}
console.log(crescimentoCriancas(160, 2, 140, 100))