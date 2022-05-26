const alunos = [
    { nome: "Misael", nota: 8.8, bolsista: false },
    { nome: "Danilo", nota: 8.2, bolsista: false },
    { nome: "Douglas", nota: 10, bolsista: true },
    { nome: "Geferson", nota: 5.8, bolsista: false }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)