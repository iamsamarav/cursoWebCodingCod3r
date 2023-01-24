const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Corracha", "preco": 13.50}',
    '{"nome": "Kit de Lapis", "preco": 21.45}',
    '{"nome": "Caneta", "preco": 6.45}',
]

carrinho.map(function(i){
    preco = JSON.parse(i)
    return console.log(preco.preco)
})