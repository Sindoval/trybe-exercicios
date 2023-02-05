/* Implemente a função fizzBuzz que recebe um array de números e retorna um array de string de acordo com o resultado

A função fizzBuzz recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar um array de strings:

Retorne a string 'fizz' para cada número do array que seja divisível apenas por 3;
Retorne a string 'buzz' para cada número do array que seja divisível apenas por 5;
Retorne a string 'fizzBuzz' para cada número do array que seja divisível por 3 e 5;
Retorne a string 'bug!' para cada número do array que não seja dividido por 3 nem por 5.
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'].

O que será testado:

A função fizzBuzz deve retornar as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando receber os parâmetros [2, 15, 7, 9, 45];

A função fizzBuzz deve retornar as strings ['bug!', 'fizz'] quando receber os parâmetros [7, 9];

A função fizzBuzz deve retornar as strings ['fizz', 'buzz'] quando receber os parâmetros [9, 25]. */

const fizzBuzz = (array) => {
let resultado = [];   
for (index = 0; index < array.length; index += 1 ){
if (array[index] % 3 === 0 && array[index] % 5 ===0){
    resultado.push('fizzBuzz');
 } else if (array[index] % 3 === 0) {
    resultado.push('fizz');
 } else if(array[index] % 5 === 0) {
    resultado.push('buzz');
 } else {
    resultado.push('bug!');
 }
} return resultado;
}
 console.log(fizzBuzz([9,25]));