const saveCartItems = () => {
  const olPai = document.getElementsByClassName('cart__items')[0];
  const dados = olPai.innerHTML;
 localStorage.setItem('cartItems', dados);
 console.log(dados);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
