function range ({ min = 0, max = 1000} = {}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(range({max: 50, min: 40}))
console.log(range({min: 955}))
console.log(range({}))
console.log(range())