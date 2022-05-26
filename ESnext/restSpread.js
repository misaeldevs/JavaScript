// Operador ... rest(juntar)/spread(espalhar)
// Usar rest como parâmetro de uma função

//Usar spread como objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//Usar spread como array
const grupoA = ['Misael', 'Danilo', 'Marcelo']
const grupoFinal = ['Cleane', 'Lourenyze', ...grupoA]
console.log(grupoFinal)