function getInteiroAleatorio({min = 0,max = 10} = {}){
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

let opcao = 0
let iterou = 0

while (opcao != -1){
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
    iterou++
}

console.log(iterou)