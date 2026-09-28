function Verificar_temperatura(){
    const valor = document.getElementById("temp");
    let resultado = document.querySelector("resultado");
    const imagem = document.querySelector("img");

    if(valor>=25) {
        imagem.src ="https://blog.lojasrenner.com.br/wp-content/uploads/2022/09/interno_01_2x-50.jpg";
        resultado.appendChild(imagem);
    } else if(valor>=34) {
        imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nnPX8IfpCF2DpwG5NXy9xJ_l9M5yyYqBFd5xBbAC3b0ez4JD4D0iWG9o&s=10";
        resultado.appendChild(imagem);
    }
}