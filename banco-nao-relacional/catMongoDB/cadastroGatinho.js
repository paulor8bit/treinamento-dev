const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gatos', {useNewUrlParser: true, useUnifiedTopology: true});

run().catch(error => console.log(error.stack));
    async function run() {
    await mongoose.connect('mongodb://localhost:27017/gatos', { useNewUrlParser: true });
      
    const GatoSchema = new mongoose.Schema
    const gatinhos = mongoose.model('gatos', GatoSchema);

    //Ver o ultimo cadastro
    const data = await gatinhos.findOne({numero: {$exists: true}}, {_id:0, numero: 1}).sort({ field: 'asc', _id: -1 })
    var str = (' ' + data)
    this.novoNumero = ( str.replace(/[^\d]+/g,'')*1 )    
     


    const Gato = mongoose.model('Gato', { numero: Number, name: String, cor: String, olhos: String, idade: Number });
    const gatinho = new Gato({ numero: (novoNumero+1), name: 'Shaike', cor: 'Laranja e branca', olhos: 'Amarelo ', idade: 4 });


gatinho.save().then(() => {
    console.log('meow')
      
    apresentaNovoGatinho()
 
    
    

})

function apresentaNovoGatinho() { 
    console.log('Novo cadastro! :)')
    console.log(`Gatinho cadastrado: ${gatinho.name} `)
    console.log(`Numero de cadastro: ${gatinho.numero} `)
    console.log(`Cor: ${gatinho.cor} `)
    console.log(`Olhos: ${gatinho.olhos} `)
    console.log(`Idade: ${gatinho.idade} `)
}
}



//Html com formulario para cadastros de novos gatinhos
//pegar idade meses e converter a anos 
//HTML com relatorio dos gatinhos
//criar contador de gatos