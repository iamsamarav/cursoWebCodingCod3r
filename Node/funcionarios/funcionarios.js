const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(Response =>{
    const funcionarios = Response.data
    console.log(funcionarios)
    console.log(funcionarios.filter(a => a.pais = 'China').filter(a => a.genero = 'F').reduce(function(acum, atual){
        return acum.salario < atual.salario ? acum : atual
    }))
})

