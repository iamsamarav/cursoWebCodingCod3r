function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}

nota = 8
soBoaNoticia(nota)

function seForVerdadeEuFalo(valor){
    if (valor){
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo('Ana')
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})