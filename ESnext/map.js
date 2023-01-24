const { values } = require("lodash")

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))

const valuesKeys = new Map([
    [function (){ }, 'Function'],
    [{ }, 'Object'],
    [123, 'Number']
])

valuesKeys.forEach((value, key) => {
    console.log(key, value)
})

console.log(valuesKeys.has(123))
valuesKeys.delete(123)
console.log(valuesKeys.has(123))
console.log(valuesKeys.size)

valuesKeys.set(123, 'a')
valuesKeys.set(123, 'b')
valuesKeys.set(456, 'b')
console.log(valuesKeys)