// 2. Adicione o produto ao carrinho de compras
const fetchItem = async (item) => {
const url = `https://api.mercadolibre.com/items/${item}`;
const retorno = await fetch(url);
const data = await retorno.json();
return data; 
 };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
