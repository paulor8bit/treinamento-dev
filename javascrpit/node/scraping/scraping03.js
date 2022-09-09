const cheerio = require('cheerio')
const request = require('request')

function scraping() {
    request({
        method: 'GET',
        url:'http://www.portodemaceio.com.br/portal'
    },(err, res, body) => {
        if (err) return console.log(err)
        const $ = cheerio.load(body)
        const title = $('span').text()

        // Array retornado: ["João", "da", "Silva", "Oliveira"]
        let stringExemplo = title
        let resultado = stringExemplo.split(" ");
        let navioPassageiros = resultado[14].split("")

        //  Navios Atracados 1 Navios ao Largo 0 Navios Esperados 3 Navios de Passageiros 01
        // Ou remover as palavras
        // const titleReduce = title.replace("2Mai2022leia mais...01Abr2022leia mais...23Nov2021leia mais...11Nov2021leia mais...08Nov2021leia mais...07Mai2021leia mais...05Mai2021leia mais...03Mai2021leia mais...03Mai2021leia mais...01Abr2022leia mais...27Dez2021leia mais...31Mai2021leia mais...18Mai2021leia mais...06Mai2021leia mais...03Mai2021leia mais...30Abr2021leia mais...27Abr2021leia mais...05Jun2020leia mais...© 2020 Administração do Porto de Maceió. Todos os direitos reservados.","")
        console.log(`
        Navios Atracados: ${resultado[3]},
        Navios ao Largo: ${resultado[7]}, 
        Navios Esperados: ${resultado[10]}, 
        Navios de Passageiros: ${navioPassageiros[0]}.
        `)
    })
}

scraping()