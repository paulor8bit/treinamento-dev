const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const sitealvo = 'http://www.portodemaceio.com.br/portal'

const dadosHTML = async () =>{ 
    try {
        const res = await axios.get(sitealvo)
        console.log(res.data)
    } catch (erro) { console.log ('Erro :(')}
}

dadosHTML()

