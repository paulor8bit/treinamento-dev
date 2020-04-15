const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gatos', {useNewUrlParser: true, useUnifiedTopology: true});

const Gato = mongoose.model('Gato', { numero: Number, name: String, cor: String, olhos: String, idade: Number });
const gatinho = new Gato({ numero: 78, name: 'Beto', cor: 'branca e cinza', olhos: 'Castanha', idade: 4 });

gatinho.save().then(() => {
    console.log('meow')
    //verifica o ultimo numero e +1
    
    apresentaNovoGatinho()
    procurarGatinho()
    
    

})




function apresentaNovoGatinho() { 
    console.log('Novo cadastro! :)')
    console.log(`Gatinho cadastrado: ${gatinho.name} `)
    console.log(`Numero de cadastro: ${gatinho.numero} `)
    console.log(`Cor: ${gatinho.cor} `)
    console.log(`Olhos: ${gatinho.olhos} `)
    console.log(`Idade: ${gatinho.idade} `)
}

function procurarGatinho () { 
    run().catch(error => console.log(error.stack));
    async function run() {
    await mongoose.connect('mongodb://localhost:27017/gatos', { useNewUrlParser: true });
      
    const GatoSchema = new mongoose.Schema
    const gatinhos = mongoose.model('gatos', GatoSchema);
   
    
    // // Acha todos os Gatinhoss
    // const data = await gatinhos.find()
    // console.log(data)
    
    
    // Procura gatos com idade minima igual a 4
    // const data1 = await gatinhos.find({ idade: { $gte: 4 } })
    // console.log(data1)
    
    // Mostra gatinhos com mesmo nome cadastrado
    // const data = await gatinhos.find({ name: gatinho.name })
    // console.log(data)
    
    // //Mostra o ultimo gatinho cadastrado
    // const data = await gatinhos.findOne().sort({ field: 'asc', numero: -1 })
    // // const data = await gatinhos.findOne().sort({ field: 'asc', _id: -1 })
    // console.log(data)
    // console.log(data._id)   
    

    // //Mostra o ultimo gatinho cadastrado
    // const data = await gatinhos.findOne({}, {}, { sort: { 'numero' : -1 } })
    // const data = await gatinhos.findOne().sort({ field: 'asc', _id: -1 })
    // console.log(data)
    // console.log(data._id)   
        //tranformar em objeto, array para poder pegar var por var

    // Mostra os nomes dos gatinhos
    const data = await gatinhos.find({numero: {$exists: true}}, {_id:0, name: 1})
    console.log(data)
  
    //mostra o ultimo Numero cadastradado
    // const data = await gatinhos.findOne({numero: {$exists: true}}, {_id:0, numero: 1}).sort({ field: 'asc', _id: -1 })
    // var str = (' ' + data)
    // novoNumero = ( str.replace(/[^\d]+/g,'')*1 )    
    // console.log (`O Ultimo numero cadastrado é: ${novoNumero}`)
    // console.log (`O proximo numero cadastrado sera: ${novoNumero+1}`)
  
    



    }
}  






//Html com formulario para cadastros de novos gatinhos
//pegar idade meses e converter a anos 
//HTML com relatorio dos gatinhos
//criar contador de gatos