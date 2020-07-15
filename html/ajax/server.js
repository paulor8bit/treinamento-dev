//npm init  -y
//configurar packjson
//npm i
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const axios = require('axios')


app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Para Upload de arquivos
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback) { 
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }

})
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => { 
    upload(req, res, err => { 
        if (err) { 
            return res.end('Ocorreu um erro')
        }

        res.end('Concluido com suscesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({ 
        ...req.body, 
        id: 1 
    })
})

app.get('/parOuImpar', (req, res) => { 
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'

    })    
    
})

// app.get('/teste', (req, res) => res.send('OK'))
// app.get('/teste', (req, res) => res.send(new Date))
app.listen(8080, () => console.log('Excecutando...  '))