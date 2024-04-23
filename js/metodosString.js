// length

var nome = "Luis";
console.log(nome.length);


// indexOf

console.log(nome[2]);
var frase = 'O rato roeu a roupa do rei de Roma';
console.log(frase.indexOf('roeu'));


// slice

var roeu = frase.slice(7,11);
console.log(roeu);


// replace

var novaFrase = frase.replace('roeu', 'teste');
console.log(novaFrase);


// yoLowerCase e toUppertCase

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());


// Trim

var nome = '            Luis';
console.log(nome);
console.log(nome.trim());


// split

var tags = 'PHP, JavaScript, HTML, CSS';
console.log(tags.split(', '));


// lastIndexOf

var frase2 = 'Eu quero a ultima palavra teste dessa frase de teste';
console.log(frase2.lastIndexOf('teste'));