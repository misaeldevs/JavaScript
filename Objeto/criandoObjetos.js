// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto("Caneta", 2, 0.15)
const p2 = new Produto("Desktop", 2.500, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
} 

const f1 = criarFuncionario("Misael", 7980, 2)
const f2 = criarFuncionario("Danilo", 11400, 8)
console.log(f1.getSalario(), f2.getSalario())

//Object Create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma Função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON."}')
console.log(fromJSON.info)