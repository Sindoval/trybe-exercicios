const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}
///////////////////////////////////////////////////////////
//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
//Use a sintaxe meuObjeto.chave. Valor esperado no console:
//Bem-vinda, Margarida
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  console.log('Bem-vinda, ' + info.personagem + '!!!')

  //////////////////////////////////////////////////////////////
  //Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. 
  //Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
  info.recorrente = 'sim' 
  console.log(info);

  //Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
 //1 personagem
 //2 origem
 //3 nota
 //4 recorrente

 for (let index in info ){
    console.log(index);
 }
  //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
//Copiar
//Margarida
//Pato Donald
//Namorada do personagem principal nos quadrinhos do Pato Donald
//Sim
for (let indexx in info ){
    console.log(info[indexx]);
}
