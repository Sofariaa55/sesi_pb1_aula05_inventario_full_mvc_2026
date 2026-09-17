const express = require("express")

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

//Configurações do servidor
const app = express()
app.use(express.urlencoded({ extended: true }))
const porta = 3000

//Rotas
app.get('/', rotaInicial)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})