function verificarIdade() {
    let idade = document.getElementById("campoIdade").value;
    let Resultado = document.getElementById("resultado");


    if (idade >= 18) {
        Resultado.innerText = "Acesso liberado!";
    }
    else {
        Resultado.innerText = "Acesso inválido.Tente novamente!";
    }
}