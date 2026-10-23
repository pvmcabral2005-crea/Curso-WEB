const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const usuarios = [
    { nome: "Pedro", cargo: "Programador"},
    { nome: "Carla", cargo: "Desenvolvedor"},
    { nome: "José", cargo: "Designer"}
]

app.get('/' ,function (req,res) {
    return res.send("Tudo certo");
});

app.get('/usuarios' ,function (req,res) {
    return res.json(usuarios);
});

app.post('/usuarios', function (req,res) {
    const dadosEnviados = req.body;

    const novoUsuario = {
        nome: dadosEnviados.nome,
        cargo: dadosEnviados.cargo };

    usuarios.push(novoUsuario);
    return res.status(201).json(novoUsuario);
});

const porta = 3000;
app.listen(porta, function(){
    console.log(`🚀 Rodando Back-end em http://localhost:${porta}`);
});