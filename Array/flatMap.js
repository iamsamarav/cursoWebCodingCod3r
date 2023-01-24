const escola = [{
    nome: 'Turma M1',
    alunos:[
        {nome: 'Gustavo', nota: 8.1},
        {nome: 'Ana', nota: 9.1}
    ]
},{
    nome: 'Turma M2',
    alunos:[
        {nome: 'Rebeca', nota: 7.3},
        {nome: 'Roberto', nota: 8.9}
    ]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasdaTurma = turma => turma.alunos.map(getNotaAluno)

const notasUm = escola.map(getNotasdaTurma)
console.log(notasUm)

console.log(escola.flatMap(getNotasdaTurma))
