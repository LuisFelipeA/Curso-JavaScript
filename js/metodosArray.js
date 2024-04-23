var arr = [ 1, 2, 3, 4, 5];
console.log(arr.length);

// push
arr.push(6);
arr.push('Push');
console.log(arr);


// pop
arr.pop();
console.log(arr);


// unshift
arr.unshift(0);
arr.unshift('Luis');
console.log(arr);


// shift
arr.shift();
console.log(arr);


// acessar ultimo elemento
console.log(arr[arr.length -1]);


// isArray
console.log(Array.isArray(5));
console.log(Array.isArray(arr));


// splice - splice(posição, qtdRemover, addElemento) 

arr.splice(2,0, 999); // adcionar
console.log(arr);

arr.splice(4,1); // remover
console.log(arr);


// indexOf
console.log(arr.indexOf(2));


// join
var arr2= ['O', 'Rato', 'Roeu', 'a', 'roupa'];
console.log(arr2.join(', '));


// reverse
console.log(arr2.reverse());