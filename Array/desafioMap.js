const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um ARRAY apenas com os preços.
//console.log(JSON.parse('{"nome": "Borracha", "preco": 1.45}'))
//console.log(JSON.parse('{"nome": "Caderno", "preco": 13.90}'))
//console.log(JSON.parse('{"nome": "Kit de Lápis", "preco": 41.22}',))
//console.log(JSON.parse('{"nome": "Caneta", "preco": 7.50}',))

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)