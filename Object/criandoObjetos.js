// usando a notação literal

const objeto = {}
console.log(objeto)

//Object em JS -> função construtora Object

console.log(typeof Object, typeof new Object)
const objetoDois = new Object
console.log(objetoDois)

// Funções construtoras

function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const produtoUm = new Produto ('Caneta', 7.99, 0.15)
const produtoDois = new Produto ('Notebook', 7.99, 0.15)
console.log(produtoDois.getPrecoComDesconto(), produtoUm.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30) * (30-faltas)
        }
    }
}

const funcionarioUm = criarFuncionario('João', 7980, 4)
const funcionarioDois = criarFuncionario('Maria', 11400, 1)
console.log(funcionarioDois.getSalario(), funcionarioUm.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

