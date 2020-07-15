const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
 
axios.get(url).then(response => { 
const funcionarios = response.data
console.log(`O nome da pessoa é ${funcionarios[1].nome}`)
})





// const linhas = estados.map( estado => {
//         //adcionando no HTML o JSON 
//         const tdID = document.createElement('td')
//         tdID.innerHTML = estado.id

//         const tdNome = document.createElement('td')
//         tdNome.innerHTML = estado.nome

//         const tdSigla = document.createElement('td')
//         tdSigla.innerHTML = estado.sigla

//         const tr = document.createElement('tr')

//         tr.appendChild(tdID)
//         tr.appendChild(tdNome) 
//         tr.appendChild(tdSigla) 
//         // console.log(estado[1].sigla)

//         return tr                 

//     })
//     const tabela = document.createElement('table')
//     linhas.forEach(linha => tabela.appendChild(linha))
//     document.body.appendChild(tabela)
