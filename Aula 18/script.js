//const praias_para_visitar = ["praia de jericoacoara", "Baía de Sancho", "praia de Ipanema", "Ilha de Campeche"];
//let valor = 0;
//alert(valor);
//alert(praias_para_visitar.length);
//alert(praias_para_visitar[4]);
//praias_para_visitar.push("praia do futuro");
//alert(praias_para_visitar);

const compras = document.getElementById("TelaLista");
let lista = ["poupa de frutas", "ovos", "farinha de trigo", "batata frita"];

compras.innerHTML += `As compras são: ${lista} <hr>`;
compras.innerHTML += `A quantidade da lista é: ${lista.length} <hr>`;
compras.innerHTML += `O último item na lista é :${lista[3]} <hr>`;
compras.innerHTML += `Novo produto adicionado ás compras é: ${lista.push("maionese")} <hr>`;
