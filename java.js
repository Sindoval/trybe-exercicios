//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 console.log(numbers);

 console.log(numbers[5]);
 let numerosSomados = numbers[0] + numbers[1]+ numbers[2]+ numbers[3]+ numbers[4]+ numbers[5]+ numbers[6]+ numbers[7]+ numbers[8]+ numbers[9];
 console.log(numerosSomados);
 let numeroDeElementos = 10;
 let mediaAritmetica = numerosSomados / numeroDeElementos;
console.log(mediaAritmetica);
if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
console.log(numbers[index]);
}

