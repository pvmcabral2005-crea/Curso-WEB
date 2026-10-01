
function soma () {
const soma1 = Number(document.getElementById("numero1").value);
const soma2 = Number(document.getElementById("numero2").value);
document.getElementById("soma").value = soma1 + soma2;
}

function subtracao () {
const subtracao1 = Number(document.getElementById("numero3").value);
const subtracao2 = Number(document.getElementById("numero4").value);
document.getElementById("subtração").value = subtracao1 - subtracao2;

}

function multiplicacao () {
const multiplicacao1 = Number(document.getElementById("numero5").value);
const multiplicacao2 = Number(document.getElementById("numero6").value);
document.getElementById("multiplicação").value = multiplicacao1 * multiplicacao2;
}
function divisao() {
const divisao1 = Number(document.getElementById("numero7").value);
const divisao2 = Number(document.getElementById("numero8").value);
document.getElementById("divisao").value = divisao1 - divisao2;
}

