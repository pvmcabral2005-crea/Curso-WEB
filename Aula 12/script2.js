function CalcularMedia() {
    let mediaResultado = document.getElementById("mediaResultado");
    let nota1 = document.getElementById("nota1");
    let nota2 = document.getElementById("nota2");
    let nota3 = document.getElementById("nota3");
    let nota4 = document.getElementById("nota4");
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 6) {
        mediaResultado.innerText = "Aprovado!";
    }

    else {
        mediaResultado.innerText = "Em recuperação.";
    }

}