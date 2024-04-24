var teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "Luis",
    idade: 29,
    falar: function(){
        console.log('Ola, tudo bem?')
    },
    dizerNome: function(){
        console.log("Meu nome é " + this.nome);
    },
    aniversario: function(){
        this.idade +=1;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);