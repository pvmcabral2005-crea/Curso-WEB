//console.log("Olá, Seja Bem-vindo!");
//console.log("Olá, mundo hoje é um grande dia!"); 
//let nome = prompt ("Digite seu nome:"); 
//console.log(nome);
//let idade = prompt("Digita sua idade:");  
//console.log(idade);
///let curso = prompt("Digite seu curso atual:");
//console.log(curso);

//let ano_de_nascimento = prompt("Ano que você nasceu:");
//console.log("Idade é de:" +(2026-ano_de_nascimento));

let numero1 = Number(prompt("Digite o primeiro valor:"));
let numero2 = Number(prompt("Digite o segundo valor:"));

console.log("A soma dos valores é:"+ (numero1 + numero2));
console.log("A subtração dos valores é:" + (numero1 - numero2));
console.log("A mutiplicação dos valores é:" + (numero1 * numero2));
console.log("A divisão dos valores é:" + (numero1 / numero2));

function soma(numero1, numero2){
    return(numero1 + numero2)
};

function multiplicacao(numero1, numero2){
    return(numero1 * numero2)
};

function subtração(numero1 , numero2){
    return(numero1 - numero2)
};