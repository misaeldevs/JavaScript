/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.*/

const string = ("pro")
const arrayPalavras = ["programação", "prejuízo", "vida", "programa", "desafio"]

function filtrarPalavras(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras) {
        if (palavra.includes(inicio)) {
            resultado.push(palavra)
        }
    }
    return resultado
}
console.log(filtrarPalavras(string, arrayPalavras))