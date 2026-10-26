const botao  = document.querySelector("#botao");
botao.addEventListener("submit", function (evento) {
    evento.preventDefult();

let nome = document.getElementById("nome").value;
let cargo = document.getElementById("cargo").value;

const dadosUsuarios = {
    nome: nome,
    cargo: cargo
};

fetch("http://localhost:3000/usuarios", {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(dadosUsuarios)

    .then(function(RespostaServidor) {
       return respostaServidor.json();
    })

    .then(function(usuarioSalvo) {
        alert(`O usuário ${usuarioSalvo.nome} foi cadastrado com sucesso!` );
        botao.reset();
    })
    .catch(function(erro) {
        console.error("Houve erro ao se conectar com backend:", erro);
        alert("Erro:Não foi possível se conectar ao backend.");
    })
});



});