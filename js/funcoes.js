function primeiraFuncao(){
    console.log("Hello World");
}

function ola(nome) {
    console.log("Olá, " + nome);
}

ola("Luis");
ola("Felipe");

var nomePessoa = "José";

ola(nomePessoa);

function soma(a, b){
    console.log("resultado: " + (a + b));
}

soma(3,2);

function multplicacao(a, b){
    return a * b;
}

var resultado = multplicacao(2,3);

console.log("Resultado: " + resultado);