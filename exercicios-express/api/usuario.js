function salvar (req, res) {
    res.send('Usuario > Salvar')
}

function obter(req, res) { 
    res.send('Usuario > obter')
}

module.exports = {salvar, obter}