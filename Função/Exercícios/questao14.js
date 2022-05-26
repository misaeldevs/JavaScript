/*Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

function validarFruta(fruta) {
    if (fruta === "maçã") {
        return 1
    } else if (fruta === "kiwi") {
        return 2
    } else if (fruta === "melancia") {
        return 3
    } else {
        return `Fruta não catalogada.`
    }
}
 */

function nomeFruta(fruta){
    
    switch (fruta) {
        case "maçã": return `Não vendemos esta fruta aqui.`
        case "kiwi": return `Estamos com escassez de kiwis.`
        case "melancia": return `Aqui está, são 3 reais o quilo.`
        default: return `Fruta não catalogada.`
    }

}


console.log(nomeFruta("maçã"))
