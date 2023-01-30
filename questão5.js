
function higuestCounter (array){
   let maiorNumero;
    for (let index of array){
    maiorNumero[index] = (maiorNumero[index] || 1) +1; 
    return maiorNumero
    } 
}



console.log(higuestCounter([9,1,5,6,3,9,7]));
