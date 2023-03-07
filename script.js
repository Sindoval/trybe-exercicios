//FILTER()

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

 const teste = dados.filter((item) => {
  // retorne apenas os elementos que são do tipo string
  return typeof item === 'string';
});
console.log(teste);

dados.filter((item) =>  typeof item !== 'string');
///////////////////////////////////////////////////////

const listaNumeros = [10, 20, 30, 40];

// Armazena o resultado em uma nova variável maiorVinte
let maiorVinte = listaNumeros.filter((item) => {
  // retorne apenas os elementos que são maiores do que vinte
  return item > 20;
});

console.log(maiorVinte);

//////////////////////////////////////////////////
//REDUCE()

/* array.reduce(callback, valorInicial); */

/* array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial); */

const valorItens = [1, 32, 44, 2, 3];

const reduce = valorItens.reduce((acc, curr) => {
  //console.log(`acumulador - acc:`, acc);
  //console.log(`valorAtual - curr:`, curr);
}, 0);

console.log(reduce);

valorItens.reduce((acc, curr) => {
    console.log(`acc:`, acc);
    console.log(`curr:`, curr);
    console.log('a soma atual é', acc + curr);
  
    return acc + curr;
  }, 0);



  const numbers = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum = numbers.reduce(sumNumbers, 30);

console.log(totalSum); //112
