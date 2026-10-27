const formulario = document.getElementById("formulario-inscricao");
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

            async function BuscaDados() {
                try{
                    const resposta = await fetch("http://localhost:3000");
                    const dados = await resposta.json();

                    console.log(dados);
                    renderizarNaTela(dados);
                } catch(erro) {
                    console.error("Erro ao buscar dados:", erro);
                }
            }

            function renderizarNaTela(usuarios) {
                const listaElement = document.getElementById("cadastros");
                listaElement.innerHTML = "";

                usuarios.forEach(usuario => {
                    const li = document.createElement("li");
                    li.textContent = usuario.nome = "" +usuario.cargo;
                    listaElement.appendChild(li);
                });
            }

            BuscaDados();
    
    console.log(dadosUsuarios)
});