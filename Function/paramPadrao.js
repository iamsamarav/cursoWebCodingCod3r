//1° estratégia para gerar um valor padrão

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0))

//2°, 3° e 4° estratégia para gerar valor padrão

function soma2(a, b, c){
    a = a !== undefined ? a : 1 //2°
    b = 1 in arguments ? b : 1 //3°
    c = isNaN(c) ? 1 : c //4°

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3))

//Valor padrão do es2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))