const ferrari ={
    moodelo: 'F40',
    velMax: 324
}

const volvo = {
    moodelo: 'V40',
    velMax: 280
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto(){}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)