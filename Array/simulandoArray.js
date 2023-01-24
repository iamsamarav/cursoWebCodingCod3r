const quaseArray = { 0: 'Ana', 1: 'Rafael', 3: 'Bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    }, enumerable: false
})

console.log(quaseArray[0])

const meuArray = [ 'Ana', 'Rafael', 'Bia' ]
console.log(quaseArray.toString(), meuArray)