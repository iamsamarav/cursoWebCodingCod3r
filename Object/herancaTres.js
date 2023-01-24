const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filhaUm = Object.create(pai)
filhaUm.nome = 'Ana'
console.log(filhaUm.corCabelo)

const filhaDois = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filhaDois.nome)
filhaDois.nome = 'Carla'
console.log(`${filhaDois.nome} tem cabelo ${filhaDois.corCabelo}`)

console.log(Object.keys(filhaUm))
console.log(Object.keys(filhaDois))

for (let key in filhaDois){
    console.log(key)
}

for (let key in filhaDois){
    filhaDois.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key} `)
}

