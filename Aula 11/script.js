//let valor = Number(prompt("Digite um valor"));
//let desconto = valor * 0.15;
//let valor_final = valor - desconto;
//console.log("O valor final com o desconto é:" + valor_final);
//alert("O valor final com desconto é:" + valor_final);

//let valor1 = Number(prompt("Digite o primeiro valor"));
//let valor2 = Number(prompt("Digite o segundo valor"));

//let divisão = valor1 / valor2;
//console.log("O valor final da operação é:" + divisão);

//let distância = Number(prompt("A distância percorrida pela moto em km é:" + 'km'));
//let combustivel = Number(prompt("O combustivel gasto foi de:" + 'litros'));

//let valor_final = distância + combustivel/2;
//alert("O valor da média gasta é de:" + valor_final);

//let valor_produto = Number(prompt("Qual valor total do produto:"));
///let desconto = Number(prompt("Qual o valor com desconto:"));

//let valor_final = valor_produto - desconto;

//alert("O valor final do produto é:" + valor_final);

const caixaTexto = document.querySelector('#campoNome');
const botaoTarde = document.querySelector('#btnTarde');
const botaoNoite = document.querySelector('#btnNoite');
const botaoDia = document.querySelector('#btnDia');
const areaResultado = document.querySelector('#PainelResultado');

botaoTarde.addEventListener('click', function(){
    let Usuario = caixaTexto.value;
    areaResultado.innerHTML = `<h1><em>Boa Tarde ${Usuario}!</em></h1>`;
});
botaoDia.addEventListener('click', function(){
    let Usuario = caixaTexto.value;
    areaResultado.innerHTML = `<h1><em>Bom Dia ${Usuario}!</em></h1> `
    corpo.style.backgroundColor = 'green';
});

botaoNoite.addEventListener('click', function(){
    let Usuario = caixaTexto.value;
    areaResultado.innerHTML = `<h1><em>Boa Noite ${Usuario}!</em></h1>`;
});

