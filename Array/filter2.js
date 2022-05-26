Array.prototype.filter2 = function(callback){
    const newFilter = []
    for(i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
        newFilter.push(this[i])
    }
    return newFilter
}

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de vidro", preco: 12.49, fragil: true},
    {nome: "Copo de plástico", preco: 18.99, fragil: false},
]

const produtosFrageis = p => p.fragil
const precoMaior500 = p => p.preco >= 500

resultado = produtos.filter2(produtosFrageis).filter2(precoMaior500)
console.log(resultado)