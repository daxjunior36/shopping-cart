// 4. Carregue o carrinho de compras através do LocalStorage ao iniciar a página
const getSavedCartItems = () => {
  const dados = localStorage.getItem('cartItems');
  const olPai = document.getElementsByClassName('cart__items')[0];
  olPai.innerHTML = dados;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}