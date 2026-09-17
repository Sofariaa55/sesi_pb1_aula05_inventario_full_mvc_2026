const bens = require('../bens.json')

function autoIncrement(){
    const ultimoId = (bens[bens.length - 1].id)
    return ultimoId + 1
}

//CRUDS
const create = (req, res) => {
    const dados = req.body
    dados.id = autoIncrement()
    bens.add(dados)
    res.status(201).json(dados)
}
const read = (req, res) => {
    res.json(bens)
}

module.exports = {
    create,
    read
}