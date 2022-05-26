const escola = [{
    nome: "Turma M1",
    alunos: [{
        nome: "Misael",
        nota: 9.9
    }, {
        nome: "Lourenyze",
        nota: 8.6
    }]
}, {
    nome: "Turma M2",
    alunos: [{
        nome: "Douglas",
        nota: 6.8
    }, {
        nome: "Danilo",
        nota: 9.2
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log([].concat(notas1))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)