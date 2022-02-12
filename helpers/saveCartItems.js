// 4. Carregue o carrinho de compras através do LocalStorage 
// ao iniciar a página
const saveCartItems = () => {// linha de código fornecida pela escola Trybe
  // localStorage.clear();
  const olPai = document.getElementsByClassName('cart__items')[0];
  const dados = olPai.innerHTML;
 localStorage.setItem('cartItems', dados);
 };

if (typeof module !== 'undefined') {// linha de código fornecida pela escola Trybe
  module.exports = saveCartItems;// linha de código fornecida pela escola Trybe
}
