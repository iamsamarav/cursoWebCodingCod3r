function range ([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(range([50, 40]))
console.log(range([992]))
console.log(range([ ,10]))
console.log(range([]))
