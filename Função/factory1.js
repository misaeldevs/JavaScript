// É uma função que retorna um objeto

const prod1 = {
    nome: "caneta",
    preco: 2
}

const prod2 = {
    nome: "lápis",
    preco: 1
}
console.log(prod1)
console.log(prod2)

//Fatory simples
function criarPessoa() {
    return {
        nome: "Misael",
        sobrenome: "Pereira de Oliveira",
        rg: "3.054.203-0",
        cpf: "799.862.185-00",
        cep: 49075290,
        logradouro: "Avenida Francisco José da Fonseca",
        numero: 450,
        complemento: "Casa",
        bairro: "São Conrado",
        cidade: "Aracaju",
        uf: "Sergipe",
    }
}
console.log(criarPessoa())