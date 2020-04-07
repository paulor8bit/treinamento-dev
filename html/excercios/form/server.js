// npm init -y
//npm i --save express@4.16.3 body-parser@1.18.2 -E

const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1> Parabéns. Usuario inculuido </h1>')
    })

    app.post('/usuarios/:id', (req, resp) => {
        console.log(req.params.id)
        console.log(req.body)
        resp.send('<h1> Parabéns. Usuario Alterado </h1>')
        })
    

app.listen(3003)