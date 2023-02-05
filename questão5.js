

//Crie uma função que calcula o número de repetições do maior número
//Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números.
//A função highestCount deve retornar a quantidade de vezes que o maior número se repete dentro do array.
//Por exemplo:
//Caso o parâmetro seja um array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 
//(maior número do array) se repete.
//O que será testado:

//A função highestCount deve retornar 2 quando receber o parâmetro [9, 1, 2, 3, 9, 5, 7];

//A função highestCount deve retornar 1 quando receber o parâmetro [0, 4, 4, 4, 9, 2, 1];

//A função highestCount deve retornar 3 quando receber o parâmetro [0, 0, 0].


const highestCount = (parametro) =>{

    
    
    let higherNumber = parametro[0];
    let resultado = [higherNumber -1];

    for ( let index = 0; index < parametro.length; index += 1 ){
    
      if (parametro[index] >= Math.max(higherNumber, resultado[0]) ){
      resultado.push(parametro[index])
      
      if(parametro[index] > resultado[0] ){
     resultado = [resultado[resultado.length -1]]
      } 
    }
   else{}       
} return resultado.length 
    
}
console.log(highestCount([-2,-2,-1])); 