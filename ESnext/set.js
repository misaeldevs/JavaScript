// Não aceita repetição / Não indexado
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Palmeiras').add('Corinthians')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Misael', 'Danilo', 'Douglas', 'Cleane', 'Misael']
const nomesSet = new Set(nomes)
console.log(nomesSet)