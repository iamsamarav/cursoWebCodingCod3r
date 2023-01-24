// class ferramenta{
//     constructor(array,func){
//         this.func = func(this.forEachDois())
//         this.array = array
//     }

//     forEachDois(){
//         for(indice in array)
//         valor = array[indice]
//         array = array
//         return valor, indice, array
//     }
//     getEachDois(){
//         for(let i = 0; i < this.length; i++){
//             callback(this[i], i, this)
//         }
//     }
// } => NÃO DEU CERTO PQ EU USEI A LÓGICA DE UM OBJETO

Array.prototype.getEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agata', 'Alex', 'Daniel', 'Raquel']

aprovados.getEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`) 
})
