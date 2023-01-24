const pessoa ={
    nome: 'Rebeca',
    peso: 13,
    idade: 2
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([ chave, valor ]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa,"dataNascimento",{
    enumerable: true,
    writable: false,
    value: '01/01/2023'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign 

const dest = { a: 1 }
const oUm = { b: 2 }
const oDois = { c: 3, a: 4 }
const obj = Object.assign(dest, oUm, oDois)
console.log(dest)

Object.freeze(obj)
obj.c = 1235
console.log(obj)

