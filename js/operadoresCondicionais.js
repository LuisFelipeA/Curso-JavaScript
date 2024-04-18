var i = 2;

if (i = 2){
    console.log("Igual a Dois");
};

if (i != 1) {
    console.log("Diferente de Um");
};

var x = 31;

if (x > 30){
    console.log("Maior que 30");
}
else if (x == 30) {
    console.log("Igual a 30")
}
else {
    console.log("Menor que 30");
}

// Comparando tipo de variavel

var n = 1;
var s = '1';

if (n === s) {
    console.log("Igual");
}
else {
    console.log("Diferente");
};


// Operador Lógico

// AND
if (i < x && s !== n) {
    console.log("Entrou no 'AND'");
};

// OR
if (i < x || s === n) {
    console.log("Entrou no 'OR'");
};

// NOT

if (!false) {
    console.log("entrou no 'NOT'");
};
