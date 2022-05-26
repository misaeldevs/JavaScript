const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.pop() // Retira o último elemento de um ARRAY
console.log(pilotos)

pilotos.push("Verstappen")// Adiciona um novo elemento à última posição de um ARRAY
console.log(pilotos)

pilotos.shift() // Retira o elemento de índice [0] de um ARRAY
console.log(pilotos)

pilotos.unshift("Hamilton") // Adiciona um elemento na posição de índice [0] em um ARRAY
console.log(pilotos)

// SPLICE pode adicionar ou remover elementos
// Adicionar
pilotos.splice(2, 0, "Botas", "Massa")
console.log(pilotos)
//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Retorna um novo ARRAY
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)