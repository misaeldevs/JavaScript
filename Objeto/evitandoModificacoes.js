// Object.preventExtensions -> Não se consegue adicionar atributos, porém, consegue-se alterá-los e excluí-los.
const produto = Object.preventExtensions({
    nome: "Pen drive", preco: 30, tag: "Promoção"
})
console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

//Object.seal -> Selar objeto. Não se pode adicionar ou excluir atributos, porém, consegue-se modificá-los.
const pessoa = {nome: " Misael", idade: 38}
Object.seal(pessoa)
console.log(`Selado:`, Object.isSealed(pessoa))

pessoa.sobrenome = "Pereira de Oliveira" // Não se aplica essa alteração, uma vez que o atributo sobrenome não está presente no objeto original.
delete pessoa.nome // Não se aplica porque o objeto está selado.
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes.