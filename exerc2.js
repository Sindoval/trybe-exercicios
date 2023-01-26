//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;
for (let index = 10; index > 0; index -=1){
    fatorial *= index;
}
console.log(fatorial);
///////////////////////////////////
let word = 'tryber'
let palavra = '';

for (let index = word.length -1; index >= 0; index -=1){
    palavra += word[index];
    
    console.log(palavra);
}

/////////////////////////////////////////////////////////////////////////
//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. 
//Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];













//////////////////////////////////////////////////////////////////////
//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
