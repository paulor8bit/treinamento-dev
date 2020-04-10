const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Paulinho'))


app.use((req, res, cadeia) => { 
    console.log('Antes')
    cadeia() //pode ser chamado de next
})

app.get('/cliente/:id', (req, res) => { 
    res.send(`Cliente ${req.params.id} selecionado`)
    //no postman http://127.0.0.1:3000/cliente/2
})

app.get('/clientes/relatorio', (req, res) => { 
    res.send(`Cliente relatorio completo = ${req.query.completo} ano= ${req.query.ano}`)
    //http://127.0.0.1:3000/clientes/relatorio?completo=true&&ano=2018
})

app.post('/corpo', (req, res) => { 
    // let corpo = ' '
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
    //http://127.0.0.1:3000/corpo em body e escreve o texto
})


app.get('/opa', (req, res, cadeia) => { 
    

    res.json({
        data: [
        {id: 7, name: 'Ana', position: 1},
        {id: 34, name: 'Bia', position: 2},
        {id: 73, name: 'Carlos', position: 3},
        ], 
    
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    cadeia()
})
   
app.use((req, res, cadeia) => { 
        console.log('Depois')
        cadeia() //pode ser chamado de next
})
    
    // res.json([
    //     {id: 7, name: 'Ana', position: 1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position: 3},
    // ])
    
    
    // res.json({
    //     nome: 'Ipad 32GB', 
    //     price: 1988.00,
    //     discount: 0.12
    // })


        // res.send('Estou bem')





app.listen(3000, () => { 
    console.log('Backend Excecutando...')
})
