var lista = ['Maria', 'João', 'José', 'Luis', 'Pedro'];

// Cria uma ul
var listaUl = document.createElement('ul');

// Seleciona o Body
var body = document.getElementsByTagName('body');

// console.log(body[0]);

// Adciona ul no Body
body[0].appendChild(listaUl);

// Seleciona ul
var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

// Adciona os elementos da lista na ul
for (var i = 0; i < lista.length; i++) {
    
    var li = document.createElement('li'); // Cria uma li

    var textoLi = document.createTextNode(lista[i]); // Pega texto da lista e guarda na variavel

    li .appendChild(textoLi); // Adciona texto na li

    listaNoBody[0].appendChild(li); // Adciona li na ul

}