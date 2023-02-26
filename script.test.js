const { myRemove, myFizzBuzz } = require('./script');

describe('The Function myRemove ()', () => {
    test ('Teste unitario 1', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        });
    test ('Teste unitario 2', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toBe !== ([1, 2, 3, 4]);    
        });
    test ('Teste unitario 3', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);    
        });
})

////////////////////////////////////////////////////////////////////////
describe('The Function myFizzBuzz ()', () => {
    test ('Num divisivel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test ('Num divisivel somente por 3', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    });
    test ('Num divisivel apenas por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    test ('Num não é divisivel nem por 3 nem por 5', () => {
        expect(myFizzBuzz(4)).toBe(4);
    });
    test ('Num não é um número', () => {
        expect(myFizzBuzz('d')).toBe(false);
    });
})
