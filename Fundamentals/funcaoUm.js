//Função sem retorno

function imprimirSoma(a, b){
    
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) //Pode passar só um parâmetro, o outro se torna undefined

//Função com retorno

function soma(a, b = 0){

    return a + b 
}

console.log(soma(2, 6))