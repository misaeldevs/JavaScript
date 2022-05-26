function esperarPor(tempo) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

//esperarPor()
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 4...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()
    await esperarPor(1500)
    console.log(`Async/Await ${valor}`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 3}`)

    return valor + 4
}
executar().then(console.log)