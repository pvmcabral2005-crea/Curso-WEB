function Verificar_temperatura() {
    const Temp = document.getElementById("temp").value;
    let temperatura = parseFloat(Temp);
    const imagem = document.querySelector("#imgClima");
    const output = document.getElementById("output");

    if (Temp === ""); {
        output.innerHTML = "Insira uma temperatura válida";
    }

    if (temperatura < 0) {
        output.innerHTML = "Clima: Frio intenso";
        imagem.src = "https://heatholders.com.br/cdn/shop/articles/roupas-de-inverno-no-brasil.jpg?v=1689265089";

    } else if (temperatura <= 15) {
        output.innerHTML = "Clima: Frio ameno"
        imagem.src = "https://criancastambemviajam.com/wp-content/uploads/2014/02/captura-de-tela-2014-02-11-c3a0s-00-21-33.png";

    } else if (temperatura >= 24) {
        output.innerHTML = "Clima: Quente"
        imagem.src = "https://chatgpt.com/backend-api/estuary/content?id=file_00000000ea94820eb17fa501bf235dff&ts=497412&p=fs&cid=1&sig=0be17f1fc5e743cd0e4fcb1b5cb175a9e700525f3e874750444cbe0c8246ea19&v=0";

        
    } 

    
    
    
    else {
        imagem.src = "https://conhecimentocientifico.r7.com/wp-content/uploads/2018/12/voce-sabia-que-o-planeta-terra-tem-muitos-tipos-de-climas-diferentes.jpg";

    }


}

// const imagem = document.createElement('img');
// let resultado = document.querySelector("#resultado");
