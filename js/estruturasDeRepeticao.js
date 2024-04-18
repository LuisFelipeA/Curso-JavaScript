var i = 0;

while (i < 3) {
    console.log("Contador: " + i);
    i++;
}

var y = 0
var nomes = ['Luis', 'Felipe','José', 'Maria'];

while (y < 3) {
    console.log("Nome: " + nomes[y]);
    y++;
}


for (var i = 0; i < 5; i++){
    console.log("FOR: " + i);
}


var numeros = [1,2,3,4,5];

for (i = 0; i < numeros.length; i++){
    console.log("n" + numeros[i]);
}

for(var i = 10; i > 0; i--){
    console.log("Break: " + i);
    if (i===5){
        break;
    }
}

console.log("BREAK")

var x = 10;

while( x < 100) {
    x += 10;

    if (x === 60) {
        continue;
    }

    console.log("Continue: " + x);
}