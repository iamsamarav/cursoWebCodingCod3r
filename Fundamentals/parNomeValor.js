// par nome/valor

const saudacao = 'Opa' //contexto léxico 2

function exec (){

    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}
console.log(saudacao)
console.log(exec())

const Cliente = {

    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro:'Rua Muito Legal',
        numero: 123 
    }
}

console.log(Cliente)