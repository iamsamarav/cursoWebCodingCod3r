const prod1 = {}

prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.48 //evitar atributos com espaço0

console.log(prod1)

const prod2 = {

    nome: 'Camisa Polo',
    preco:  79.90,
    obj:{
        nome: 'Nazaria',
        CD: '17'
    }
}

'{"nome": "Camisa Polo", "preco": "79.90"}' //JSON é diferente de objeto

console.log(prod2)
