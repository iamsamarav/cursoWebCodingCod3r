const notas = [8.1, 7.4, 8.4, 6.7]

for(let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 40
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}