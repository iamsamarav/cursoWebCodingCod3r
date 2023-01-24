const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 1.3, bolsista: false},
    {nome: 'Pedro', nota: 8.3, bolsista: false},
    {nome: 'Ana', nota: 9.3, bolsista: true}
]

//Desafio 01:

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))