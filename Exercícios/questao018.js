/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação,
é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

const listaProdutos = ([{
    nome: "Arroz",
    preco: 4.89
},
{
    nome: "Feijão",
    preco: 7.99
},
{
    nome: "Farinha",
    preco: 2.50
}])

function totalDespesas(produtos) {
    let total = 0
    for (let item of produtos) {
        total += item.preco
    }
    return total.toFixed(2)
}

console.log(totalDespesas(listaProdutos))