module.exports = (app, texto) => { 
    function salvar(req, res) { 
        res.send('produto > salvar' + texto)
    }

    function obter(req, res) { 
        res.send('produto > obter' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)
    return {salvar, obter}

}


