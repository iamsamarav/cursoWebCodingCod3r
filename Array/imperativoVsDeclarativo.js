const alunos =[
    {nome: 'Maria', nota: 7.5 },
    {nome: 'João', nota: 7.5},
    {nome: 'Caio', nota: 7.5}
]
let totalUm = 0
for (let i = 0; i < alunos.length; i++){
    totalUm += alunos[i].nota
}

console.log(totalUm/alunos.length)

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const totalDois = alunos.map(getNota).reduce(soma)
console.log(totalDois/alunos.length)

// select codigo, nome, email from clientes where ativo = 1