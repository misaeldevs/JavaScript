const meusAmigos = array => array['...nomes']
const meuAmor = amor => amor('Alexandre')
    // const primeiraLetraAmor = letraAmor => letraAmor[0].toLowerCase()
    // const primeiroElemento = nome => nome[0]
    // const primeiraLetra = letra => letra[2].toLowerCase()


new Promise(function(resolve) {
    resolve(['Danilo', 'Marcelo', 'Alexandre', 'Douglas'])
})

// .then(primeiroElemento)
//     .then(primeiraLetra)
.then(console.log)

new Promise(function(resolve) {
        resolve('Alexandre')
    })
    // .then(primeiraLetraAmor)
    .then(console.log)