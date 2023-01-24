const notas = [7.7, 7.8, 3.4, 2.1, 6.4, 9.0]

//Sem callback

let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback

const notasBaixasDois = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixasDois)

const notasBaixasTres = notas.filter((nota) => nota < 7)
console.log(notasBaixasTres)