const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 1.3, bolsista: true},
    {nome: 'Pedro', nota: 8.3, bolsista: false},
    {nome: 'Ana', nota: 9.3, bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)