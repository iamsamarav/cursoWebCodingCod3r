function MeuObjeto() {}
console.log(MeuObjeto.prototype)


const objetoUm = new MeuObjeto
const objetoDois = new MeuObjeto

console.log(objetoUm.__proto__ === objetoDois.__proto__)
console.log(MeuObjeto.prototype === objetoUm.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

objetoDois.falar()
objetoUm.falar()

objetoDois.nome = 'Rafael'
objetoDois.falar()

const objetoTres = {}
objetoTres.__proto__ = MeuObjeto.prototype
objetoTres.nome = 'Objeto Três'
objetoTres.falar()

//Resumindo a loucura...

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)