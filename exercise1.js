const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  //    Adicione o código do exercício aqui:
  //    Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//      De olho na dica 👀: use a função find.
/* const findBooks = () => {
    return books.find((elemento) => elemento.author.birthYear === 1947);

  };
  console.log(findBooks()); */
  const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
   return books.find((elemento) => elemento.author.birthYear === 1947).author.name;
}
    
console.log(authorBornIn1947())


///////////////////////////////////////////////////////////////////////
//Retorne o nome do livro com menor número de caracteres (menor nome).
//De olho na dica 👀: use a função forEach.

const expectedResult2 = 'Duna';
const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
 books.forEach((elemento) => {
   if(!nameBook || elemento.name.length < nameBook.length) {
    nameBook = elemento.name;
   }
 } )
 return nameBook;
  // Variável nameBook que receberá o valor do menor nome;
  
}
console.log(smallerName());


/////////////////////////////////////////////////////////////////////
//Encontre o primeiro livro cujo nome possua 26 caracteres.
const expectedResult3 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  const getNamedBook = () => {
    // escreva seu código aqui
    return books.find((elemento) => elemento.name.length === 26);
  }
  console.log(getNamedBook());


  ////////////////////////////////////////////////////////////////
  //Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
  //const expectedResult = false;

function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
    return books.every((elemento) => elemento.author.birthYear > 1901 && elemento.author.birthYear < 2001);
  }
  console.log(everyoneWasBornOnSecXX());


  /////////////////////////////////////////////////////////////////
  //Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
  const expectedResult4 = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  return books.some((elemento) => elemento.releaseYear > 1979 && elemento.releaseYear < 1990);
}
console.log(someBookWasReleaseOnThe80s());

/////////////////////////////////////////////////////////
