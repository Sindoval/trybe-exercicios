//Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; 
//faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'uva', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite Condensaso', 'Suco de laranja', 'Suco de limao'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const saladaDeFrutas = [...fruit, ...additional];
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));


//rest

const countParams = (...args) => {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


  const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
  console.log(sum(4, 7, 8, 9, 60)); // 88


  //Object Destructuring

  /* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas */

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

  ////////////////////////////////////////////

  const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']