// Novo recurso do EC2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 14
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: i, idade: n } = pessoa 
console.log(i, n)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereco:{ logradouro, numero } } = pessoa
console.log(logradouro, numero)