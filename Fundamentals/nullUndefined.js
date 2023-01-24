let valor //não inicializado

console.log(valor)
// console.log(valor2) //não foi declarado

valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) //Gera um problema

const produto = {}
console.log(produto.nome)
console.log(produto)

produto.preco = 3.58
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)