let aprovados = new Array("Misael", "Danilo", "Douglas")
console.log(aprovados)

aprovados = ["Misael", "Danilo", "Douglas"]
aprovados[3] = "Marcelo"
aprovados.push("Lourenyze")

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados.length)

aprovados[9] = "Cleane"
console.log(aprovados[9])
console.log(aprovados.length)

console.log(aprovados)

//aprovados.sort() // Causa alteração na ordenação ARRAY
console.log(aprovados)

//delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados =["Misael", "Danilo", "Douglas"]
aprovados.splice(1, 0, "Marcelo","Cleane")
console.log(aprovados)