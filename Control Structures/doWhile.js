function getnumeroAleatorio(min = 0, max = 10){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0
let iterou = 0

do{
    opcao = getnumeroAleatorio(-1, 10)
    console.log(`O valor sorteado foi ${opcao}`)
    iterou++
}while(opcao != -1)