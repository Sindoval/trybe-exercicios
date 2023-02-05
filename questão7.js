//Crie uma função de Caça ao Rato
//Implemente a função catAndMouse que verifica qual gato está mais perto do rato

//Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. 
//Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number` na seguinte ordem:
//- `mouse`: representa a posição do rato.

//- `cat1`: representa a posição do gato 1;

//- `cat2`: representa a posição do gato 2;
//Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

//Retorne a string 'cat2' se o gato cat2 estiver mais próximo do rato;
//Retorne a string 'cat1' se o gato cat1 estiver mais próximo do rato;
//Retorne a string 'os gatos trombam e o rato foge' caso os gatos estejam na mesma distância do rato.
//Exemplo:

//Caso o gato cat2 esteja a 2 unidades de distância do rato e o cat1 esteja a 3 unidades, sua função deverá retornar 'cat2';

//Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string 'os gatos trombam e o rato foge'.

//O que será testado:

//A função catAndMouse deve retornar a string 'cat2' quando receber os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 
//unidades de distância do rato;

//A função catAndMouse deve retornar a string 'cat1' quando receber os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 
//unidades de distância do rato;

//A função catAndMouse deve retornar a string 'os gatos trombam e o rato foge' quando receber os parâmetros onde os gatos estejam na mesma distância do rato.


 const catAndMouse = (mouse, cat1, cat2) => {
 const gato1 = Math.abs(cat1 - mouse);
 const gato2 = Math.abs(cat2 - mouse);
   if (gato1 === gato2) {
    return 'os gatos trombam e o rato foge'; 
  } else if (gato1 < gato2){
    return 'cat1';
  } else {
    return 'cat2';
  }

}
console.log (catAndMouse(-8,-7,-3));
//catAndMouse(2,1,3);