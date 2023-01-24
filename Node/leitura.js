const fs = require('fs')

const caminho = __dirname + '/lendoArquivos.json'

//sincrono

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assicronoa

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.nome.host}:${config.nome.port}`)
})

const config = require('./lendoArquivos.json')
console.log(config.nome)

fs.readdir(__dirname, (err, lendoArquivos) =>{
    console.log('Conteúdo da pasta')
    console.log(lendoArquivos)
})