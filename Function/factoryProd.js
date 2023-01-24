function criarProd (nome, preco, quantidade){
    return{
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }
}

console.log(criarProd('Notebook', 2199.49, 35))
console.log(criarProd('iPad', 3199.49, 35))