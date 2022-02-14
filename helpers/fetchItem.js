// 2. Adicione o produto ao carrinho de compras
const fetchItem = async (item) => { // linha de código fornecida pela escola Trybe
const url = `https://api.mercadolibre.com/items/${item}`;
const retorno = await fetch(url);
const data = await retorno.json();
return data; 
 };

if (typeof module !== 'undefined') { // linha de código fornecida pela escola Trybe
  module.exports = { // linha de código fornecida pela escola Trybe
    fetchItem, // linha de código fornecida pela escola Trybe
  };
}
