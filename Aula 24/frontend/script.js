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

        });

        const listaVisual = document.getElementById("listaVisual");

        function CarregarDados() {
            fetch("http://localhost:3000/usuarios")
            .then(function(resposta) {
                return resposta.json(); })

            .then(function(listaUsuarios){
                listaVisual.innerHTML= "";
                listaUsuarios.forEach(function(user) {
                    const itemLista = document.createElement("li");
                    itemLista.innerHTML = `<br>${user.nome}</br> (${user.cargo})`;
                    listaVisual.appendChild(itemLista);
                });
            })
            .catch(function(error){
                console.error("Erro ao buscar usuários:", error);
            });
        }
        CarregarDados();