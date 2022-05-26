const alunos = [
    { nome: "Misael", nota: 8.8},
    { nome: "Danilo", nota: 8.2},
    { nome: "Douglas", nota: 10},
    { nome: "Geferson", nota: 5.8},
]

// Imperativo
let total1 = 0
for(i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)