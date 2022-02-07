require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
it ('Teste se fetchProducts é uma função', () => {
  expect(typeof fetchProducts).toBe('function');
} )
it ('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
  await fetchProducts('computador')
  expect(fetch).toHaveBeenCalled();
}) 
});

