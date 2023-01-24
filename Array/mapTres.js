Array.prototype.mapDois = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Corracha", "preco": 13.50}',
    '{"nome": "Kit de Lapis", "preco": 21.45}',
    '{"nome": "Caneta", "preco": 6.45}',
]

carrinho.mapDois(function(i){
    preco = JSON.parse(i)
    return console.log(preco.preco)
}).mapDois(console.log(i))

console.log(carrinho)