const produtos = [
    {nome: 'Notebook', preco: 2000, fragil: true},
    {nome: 'iPad', preco: 2500, fragil: true},
    {nome: 'Capa Vidro', preco: 200, fragil: true},
    {nome: 'Capa de Plástico', preco: 20, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(function(p){
    return false
}))

console.log(produtos.filter(caro).filter(fragil))

