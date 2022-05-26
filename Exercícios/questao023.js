/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/
const string = ("Misael Pereira de Oliveira")

function qtdeDePalavras(quantidade){
    const palavras = quantidade.split(" ")
    return palavras.length
}
console.log(qtdeDePalavras(string))