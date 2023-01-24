console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log("Escola Cod3r".reverse())

Array.prototype.first = function (){
    return this[0]
}

sequencia = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(sequencia.first())
console.log(sequencia.reverse().first())

String.prototype.toString = function (){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())
