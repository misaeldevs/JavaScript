function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto("Notebook", 2199.49))
console.log(criarProduto("iPad", 2099.99))
console.log(criarProduto("Smartphone iPhone 10", 5.000))
console.log(criarProduto("Desktop Dell", 3218.95))