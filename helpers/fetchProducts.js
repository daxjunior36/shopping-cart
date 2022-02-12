// 1. Crie uma listagem de produtos.
const fetchProducts = async (item) => {// linha de código fornecida pela escola Trybe
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const retorno = await fetch(url);
  const data = await retorno.json();
  return data;
  } catch (error) {
  return (error);
  }
};

if (typeof module !== 'undefined') {// linha de código fornecida pela escola Trybe
  module.exports = {// linha de código fornecida pela escola Trybe
    fetchProducts,// linha de código fornecida pela escola Trybe
  };
}
