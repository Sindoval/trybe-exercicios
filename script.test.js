const myRemove = require('./script');

test ('Teste unitario 1', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
test ('Teste unitario 2', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toBe !== ([1, 2, 3, 4]);    
    });
test ('Teste unitario 3', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);    
    });