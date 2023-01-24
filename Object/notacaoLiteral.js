const a = 1
const b = 2
const c = 3

const objetoUm = {a: a, b: b, c: c}
const objetoDois = {a, b, c}
console.log(objetoUm, objetoDois)

const nomeAttr = 'nota'
const valorAttr = 7.87

const objetoTres = {}
objetoTres[nomeAttr] = valorAttr
console.log(objetoTres)

const objetoQuatro = {[nomeAttr]: valorAttr}
console.log(objetoQuatro)

const objetoCinco = {
    funcaoUm: function (){
        //...
    },
    funcaoDois() {
        //...
    }
}

console.log(objetoCinco)
