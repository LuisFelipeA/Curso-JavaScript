let x = 5; // Escopo de bloco

const y = 10; // Não pode ter valor alterado

var z = 15; // Escopo global ou de função

x = 12;

//y = 12; 

console.log(x,y,z);

if (true) {
    let x = 20; // let x que esta fora do if é considerada outra let

    console.log(x);
}

console.log(x);