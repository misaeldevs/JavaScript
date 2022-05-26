// Implementar o próprio FOREACH
// Armazenar o FOREACH dentro de um PROTOTYPE chamando uma fuinção CALLBACK com três parâmetros: o valor atual, o índice e o próprio ARRAY
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ["Misael", "Danilo", "Douglas"]
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})