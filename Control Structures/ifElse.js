const imprimirResultado = function(nota){
    if(Number.isInteger(nota) && nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa!') //cuidadoo!!