  function calTriangleArea(base, altura){
     return (base * altura) / 2;
    }
   function calRetangleArea (base, altura){
        return (base * altura);
    }

    function calAllAreas (base, altura,form){
        if (form === 'triângulo') {
            return ('O valo da área do triângulo é de: ') + (base * altura) / 2; 
        } else if (form === 'retângulo') {
            return ('O valo da área do retângulo é de: ') + (base * altura);
        } else if (form ='quadrado' && base === 10 && altura === 50) { 
            return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
        

    }
    }

console.log(calTriangleArea(10,50));
console.log(calRetangleArea(10,50));
console.log(calAllAreas(10,50,'triângulo'));
console.log(calAllAreas(10,50,'retângulo'));
console.log(calAllAreas(10,50,'quadrado'));