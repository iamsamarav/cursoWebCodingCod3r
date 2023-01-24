//Armazenando uma função em uma variável

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazennando uma função arrow em variável

const imprimirSubtracao = (a, b) =>{
    console.log(a - b)
}

imprimirSubtracao(2, 3)

//retorno implícito

const imprimirMultiplicacao = (a, b) => a * b

console.log(imprimirMultiplicacao(2, 3))

