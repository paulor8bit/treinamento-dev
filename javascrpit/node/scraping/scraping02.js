const axios = require('axios')
const cheerio = require('cheerio')

const site = 'https://al.olx.com.br/alagoas/videogames/playstation-ps4-slim-mais-3-controles-um-carregador-duplo-de-controle-e-13-jogos-em-cd-1064976983?rec=a&_ga=2.95852319.2076643081.1662727877-174451156.1662727877&lis=galeria_adview_relacionados_3040'

const dadosHTML = async () =>{ 
    try {
        const res = await axios.get(site)
        const html = res.data
        const $ = await cheerio.load(html)
        let nome= $('#content > div.sc-18p038x-2.cMWwWm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.gyKyRK > div.h3us20-6.UxTCE > div > div > h1').text()
        let preco = $('#content > div.sc-18p038x-2.cMWwWm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.cpscHx > div.h3us20-6.jUPCvE > div > div > div.sc-hmzhuo.dtdGqP.sc-jTzLTM.iwtnNi > div.sc-hmzhuo.sc-12l420o-0.kUWFYY.sc-jTzLTM.iwtnNi > h2.sc-ifAKCX.eQLrcK').text()
        console.log(`O prduto ${nome}. Com um valor de R$: ${preco}`)
        } catch (erro) { console.log ('Erro :(')}
}

dadosHTML()

