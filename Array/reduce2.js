const alunos = [
    { nome: "Misael", nota: 8.8, bolsista: false },
    { nome: "Danilo", nota: 8.2, bolsista: false },
    { nome: "Douglas", nota: 10, bolsista: true },
    { nome: "Geferson", nota: 5.8, bolsista: false },
]

// Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Alguns alunos são bolsistas?
const algunsBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunsBolsistas))
