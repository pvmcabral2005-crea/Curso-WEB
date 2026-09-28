function verificar_numero() {
    const numero = parseFloat(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (numero > 0) {
        resultado.innerHTML = `O resultado ${numero} é positivo` ;
        resultado.style.color = "blue";

    } else if (numero < 0) {
        resultado.innerHTML = `O resultado ${numero} é negativo`;
        resultado.style.color = "red";

    } else if (numero === 0) {
        resultado.innertHTML = `O resultado ${numero} é Neutro`;
        resultado.style.color = "whie";

    } else {
        resultado.innerHTML = "Por favor, digite um número!";
        resultado.style.color = "orange";


        console.log("O número é ${resultado}");
    }
   

}