const quaseArray = {0: "Misael", 1: "Danilo", 2: "Douglas"}
console.log(quaseArray)
Object.defineProperty(quaseArray, "toString", {
    value: function(){return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ["Misael", "Danilo", "Douglas"]
console.log(quaseArray.toString(), meuArray)