let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosSomados = 0;

for (let index = 0; index < numbers.length; index += 1){
    numerosSomados += numbers[index];
}
console.log(numerosSomados);

let mediaAritmetica = numerosSomados / numbers.length;

console.log(mediaAritmetica);

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
/////////////////////////////////////////////////

let numberss = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numberss.length; index += 1) {
  if (numberss[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}
//////////////////////////////////////////////
//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);
//////////////////////////////////////////////////
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };