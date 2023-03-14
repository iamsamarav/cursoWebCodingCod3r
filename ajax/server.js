const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //é o provedor de todos os arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true})) //transforma o submit do form em objeto
app.use(bodyParser.json()) //transforma dados em objetos

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '.')
    }, 
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res)=>{
    upload(req,res,err =>{
        if (err) {
            return res.end('Ocorreu um erro!')
        } 
        
        res.end('Concluído')

        })
    })

app.listen(8081, () => {
    console.log('Executando')
})