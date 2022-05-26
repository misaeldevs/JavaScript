// Coleção dinâmica de pares chave-valor.
const produto = new Object
produto.nome = "Cadeira"
produto["Marca do produto"] = "Genérica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["Marca do produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    preco: 80000,
    proprietario: {
        nome: "Misael",
        sobrenome: "Pereira de Oliveira",
        idade: 38,
        endereco: {
            logradouro: "Avenida Francisco José da Fonseca",
            numero: 450,
            complemento: "Bloco Arara, apartamento 303"
        }
    },
    condutores: [{
        nome: "Misael Pereira de Oliveira",
        idade: 38
    }, {
        nome: "Danilo Santos Sousa",
        idade: 29
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

console.log(carro)