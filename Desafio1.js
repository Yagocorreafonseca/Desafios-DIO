//variaveis
const prompt = require('prompt-sync')();
let nome;
let experiencia;
let cont = "sim";

//Codigo
while (cont == "sim"){
nome = prompt("Qual o seu nome? ");
experiencia = prompt("Qual o sua quantidade de experiencia? ");
experiencia = parseInt(experiencia);

if (experiencia <=1000){
    console.log("O Herói de nome "+ nome + " está no nível de ferro")
}
if (experiencia>= 1001 && experiencia<= 2000){
    console.log("O Herói de nome "+ nome + " está no nível de bronze")
}
if (experiencia>= 2001 && experiencia<= 5000){
    console.log("O Herói de nome "+ nome + " está no nível de Prata")
}
if (experiencia>= 5001 && experiencia<= 7000){
    console.log("O Herói de nome "+ nome + " está no nível de Ouro")
}
if (experiencia>= 7001 && experiencia<= 8000){
    console.log("O Herói de nome "+ nome + " está no nível de Platina")
}
if (experiencia>= 8001 && experiencia<= 9000){
    console.log("O Herói de nome "+ nome + " está no nível de Ascendente")
}
if (experiencia>= 9001 && experiencia<= 10000){
    console.log("O Herói de nome "+ nome + " está no nível de Imortal")
}
if (experiencia>=10001){
    console.log("O Herói de nome "+ nome + " está no nível de Radiante")
}
cont = prompt("Continuar? ");}