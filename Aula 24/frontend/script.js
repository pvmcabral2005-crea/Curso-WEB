const formulario = document.getElementById("formulario-inscricao");

let UsuarioSendoEditado = null;
formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;

    const dadosUsuarios = {
        nome: nome,
        cargo: cargo
    };

    fetch("http://localhost:3000/usuarios", {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dadosUsuarios)
    })
        .then(function (RespostaServidor) {
            return RespostaServidor.json();
        })

        .then(function (usuarioSalvo) {
            alert(`O usuário ${usuarioSalvo.nome} foi cadastrado com sucesso!`);
            formulario.reset();
        })

        .catch(function (erro) {
            console.error("Houve erro ao se conectar com backend:", erro);
            alert("Erro:Não foi possível se conectar ao backend.");
        })

});

const listaVisual = document.getElementById("listaVisual");

function CarregarDados() {
    fetch("http://localhost:3000/usuarios")
        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (listaUsuarios) {
            listaVisual.innerHTML = "";
            listaUsuarios.forEach(function (user) {
                const itemLista = document.createElement("li");
                itemLista.innerHTML = `<span><strong>${user.nome}</strong> - (${user.cargo})</span>
                     <div class="lista-user">
                      <button class="btn-edição" onclick="prepararEdição(´${user.nome}´, ´${user.cargo}´)">Editar</button>
                      <button class="btn-deletar" onclick="deletarUsuário(´${user.nome}´)">Excluir</button>
                      </div>`;
                listaVisual.appendChild(itemLista);
            });
        })
        .catch(function (error) {
            console.error("Erro ao buscar usuários:", error);
        });



    if (UsuarioSendoEditado !== null) {
        fetch(`http://localhost:3000/usuarios${[UsuarioSendoEditado]}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(dadosUsuarios)
        })
        .then(function(){
            UsuarioSendoEditado = null;
            formulario.addEventListener('button').innerText = "Salvar no Sistema";
            formulario.reset();
            CarregarDados();})
        .catch(function(erro) {
            alert("Erro ao atualizar usuário", erro);
        });


        
    } else {
        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(dadosUsuarios)
        })
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(UsuarioSalvo){
            alert(`O usuário ${UsuarioSalvo} foi cadastrado.`)
            formulario.reset();
            CarregarDados();
        })
        .catch(function(erro){
            alert("Erro ao salvar usuário",erro);
        });
    }

    function PrepararEdição(nome,cargo){
            document.getElementById('nome').value = nome;
            document.getElementById('cargo').value = cargo;
            formulario.addEventListener('button').innerText = "Atualizar Usuário";

            UsuarioSendoEditado = nome;
        }

    function DeletarUsuario(nome){
        document.getElementById('nome').value = nome;
        formulario.querySelector('button').innerText = "Excluir Usuário";
    }

}
