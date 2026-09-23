const Login = document.getElementById("Login");

if(Login) {
    Login.addEventListener('submit', function(event){
        event.preventDefault();
        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagem");
        if(usuario === "Pedmin" && senha === "3103"){
            mensagem.textContent = "Login realizado com sucesso";
            mensagem.style.color = "blue";
            window.location.href = "Pagina login.html"
        }
        else{
            mensagem.textContent = "Usuário ou senha incorretos.Tente novamente."
            mensagem.style.color ="red";
        }
    });
}