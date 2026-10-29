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

  app.put("/usuarios/:nomeParametro", function(req,res){
     const nomeParametro = decodeURIComponent(req.params.nomeParametro);
     const dadosNovos = req.body;
     const usuarioEncontrado = usuarios.find(function(u){
        return u.nomeParametro.toLowerCase() === nomeParametro.toLowerCase();
     });
     if(!usuarioEncontrado) {
        return res.status(404).json({erro: "Usuário não encontrado no sistema"})

     }

     usuarioEncontrado.nome = dadosNovos.nome;
     usuarioEncontrado.cargo = dadosNovos.cargo;
     return res.json(usuarioEncontrado);
  })

  app.delete("/usuarios/:nomeUsuario", function(req,res){
    const nomeUsuario = decodeURIComponent(req.params.nomeUsuario);
    const usuarioExiste = usuarios.some(function(u){
        return u.nomeUsuario.toLowerCase() === nomeUsuario.toLowerCase();
    });
    if(!usuarioExiste) {
        return res.status(404).json({erro: "Usuário não encontrado no sistema"})
    }
    usuarios = usuarios.filter(
        usuarioExiste = usuarioExiste.nomeUsuario !== usuarioExiste
    );
    res.status(204).end();


  });

const porta = 3000;
app.listen(porta, function(){
    console.log(`Rodando Back-end em http://localhost:${porta}`);
});