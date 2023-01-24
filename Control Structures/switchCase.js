const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
        case 8:
            console.log('Quadro de Honra')
            break
        case 7: case 6:
            console.log('Aprovado')
            break
        case 5: case 4: case 3:
            console.log('Recuperação')
            break
        case 2: case 1: case 0: 
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(9)
imprimirResultado(10)
imprimirResultado(5)